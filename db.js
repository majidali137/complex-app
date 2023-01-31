const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')

mongodb.connect(process.env.CONNECTIONSTRING,{useNewParser:true, useUnifiedTopology: true}, function (err, client) {
   module.exports = client.db()
    const app = require("./app")
     app.listen(process.env.PORT)
})
