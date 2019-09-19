var ObjectID = require('mongodb').ObjectID
module.exports = function(app, database){
    //Define our database
    const ourDB = database.db('db')
    //add new user
    app.post('/v1/user/add', (request, respond) => {
        const user = {
            name: request.body.name,
            email: request.body.email,
            avatarName: request.body.avatarName,
            avatarColor: request.body.avatarColor
        }
        ourDB.collection('accounts').insertOne(user, (err, result) => {
            if(err){
                respond.send({'error':'An error has occurred'})
            }else{
                respond.send(result.ops[0])
            }
        })
    })
    //find all users
    app.get('/v1/user', (request, respond) => {
        ourDB.collection('accounts').find({}).toArray(function(err, result){
            if(err){
                respond.send({'error':'An error has occurred'})
            }else{
                respond.send(result)
            }
        })
    })
    //find user by id
    app.get('/v1/user/:id', (request, respond) => {
        const id = request.params.id
        const details = { '_id': new ObjectID(id)}
        ourDB.collection('accounts').findOne(details, (err, result) => {
            if(err) {
                respond.send({'error':'An error has occured'})
            }else{
                respond.send(result)
            }
        })
    })
    //delete user by id
    app.delete('/v1/user/:id', (req, res)=>{
        const id = req.params.id
        const userID = { '_id': new ObjectID(id)}
        ourDB.collection('accounts').deleteOne(userID, (err, result) => {
            if(err) throw err
            res.send('User: '+id+' was deleted!')
        })
    })
    //update user by id
    app.put('/v1/user/:id', (req, res)=>{
        const id = req.params.id
        const userID = { '_id': new ObjectID(id)}
        const userData = {
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,
            avatarName: req.body.avatarName,
            avatarColor: req.body.avatarColor
        }
        ourDB.collection('accounts').updateOne(userID, {$set : userData}, (err, result) => {
            if(err) throw err
            res.send('User: '+userData.name+' was successful updated!')
        })
    })
}