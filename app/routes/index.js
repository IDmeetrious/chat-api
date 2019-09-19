const accountRoutes = require('./account_routes')
module.exports = function(app, db){
    //Here are routes
    accountRoutes(app, db)
}