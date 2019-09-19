const accountRoutes = require('./account_routes')
const userRoutes = require('./user_routes')
module.exports = function(app, db){
    //Here are routes
    accountRoutes(app, db),
    userRoutes(app, db)
}