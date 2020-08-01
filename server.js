const express = require("express");
const bcrypt = require("bcrypt-nodejs")
const cors = require("cors")
const knex = require('knex')
const bodyParser = require('body-parser');

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/signin')
const image = require('./controllers/image')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'party123',
        database: 'smart-brain'
    }
});

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {res.send(database.users)})
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

app.listen(3000, () => {
    console.log("app is running on port 3000")
})

/*
/ --> res = this is working
/signin = POST => Verifies password in DB and returns user info
/register = POST => Inserts register info into DB 
/profile/:userId = GET => Gets Info of user ID
/image = PUT => Increments the entry number of user
*/