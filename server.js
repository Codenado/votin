var express = require('express')
var app = express ()

var mongoose = require('mongoose')
var passport = require('passport')
var flash = require('flash')
var morgan = require('morgan')
var cookie-parser = require('cookie-parser')
var body-parser = require('body-parser')
var session = require('express-session')

var configDB = require('./config/database.js')

mongoose.connect(configDB.url)

app.use(morgan('dev'))
app.use(cookie-parser())
app.use(body-parser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({secret: "its a secret"}))
app.use(passport.intialize())
app.use(passport.session())
app.use(flash())

require('./app/routes.js')(app, passport)


app.listen(8080)
