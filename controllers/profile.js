const handleProfileGet = (req,res,db) => {
    (req, res) => {
        const { id } = req.params
        let found = false;
        db.select("*").from('users').where({ id })
            .then(user => {
                if (user.length) {
                    res.json(user[0])
                }
                else {
                    res.status(400).json('Not Found')
                }
            })
            .catch(err => res.staths(400).json('Error getting User'))
    
    
    
    }
    
    
    

}

module.exports = {
    handleProfileGet : handleProfileGet
}