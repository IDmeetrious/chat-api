module.exports = function(app, database){
    app.post('/accounts', (req, res) => {
        //Here create account
        const account = { 
            name: req.body.name, 
            password: req.body.password 
        }
        const ourDB = database.db('db')
        ourDB.collection('accounts').insert(account, (err, result)=>{
            if(err){
                res.send({'error':'An error has occurred'});
            }else{
                res.send(result.ops[0])
            }
        })
    })
}