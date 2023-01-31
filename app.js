const express = require('express')
const session = require("express-session")
const MongoStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')
const app = express()
const  store = new MongoStore({
  uri: process.env.CONNECTIONSTRING,
    databaseName: 'OurApp',
    collection: 'session'
})

let sessionOptions = session({
    secret: "JavaScripts is so cool",
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge:1000*60*60*24, httpOnly: true}
})
app.use(sessionOptions)
app.use(flash())

const router = require('./router')
const mongodb = require("mongodb");

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)


module.exports = app