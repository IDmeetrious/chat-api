module.exports = function(app, database){
    //Define our database
    const ourDB = database.db('db')
    
    app.post('/v1/account/register', (request, respond) => {
        const randNumber = Math.random().toString()
        const token = randNumber.slice(2)
        //Here create account
        const account = { 
            email: request.body.email, 
            password: request.body.password,
            token: token 
        }
        ourDB.collection('accounts').insertOne(account, (err, result)=>{
            if(err){
                respond.send({'error':'An error has occurred'});
            }else{
                respond.send(result.ops[0])
            }
        })
    })
    app.post('/v1/account/login', (request, respond) => {
        const account = {
            email: request.body.email,
            password: request.body.password
        }
        ourDB.collection('accounts').findOne(account, (err, result) => {
            if(err) throw err
            respond.send(result)
        })
    })
}