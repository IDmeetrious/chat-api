module.exports = function(app, database){
    app.get('/v1/user', (request, respond) => {
        const ourDB =database.db('db')
        ourDB.collection('accounts').find({}).toArray(function(err, result){
            if(err){
                respond.send({'error':'An error has occurred'})
            }else{
                respond.send(result)
            }
        })
    })
}