module.exports = function(app, database){
    app.post('/v1/account/register', (request, respond) => {
        //Here create account
        const account = { 
            email: request.body.email, 
            password: request.body.password 
        }
        const ourDB = database.db('db')
        ourDB.collection('accounts').insertOne(account, (err, result)=>{
            if(err){
                respond.send({'error':'An error has occurred'});
            }else{
                respond.send(result.ops[0])
            }
        })
    })
}