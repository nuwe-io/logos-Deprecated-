const express = require('express')
const morgan = require('morgan')
const compress = require('compression')
const methodOverride = require('method-override')
const cors = require('cors')
const helmet = require('helmet')
const passport = require('passport')
const routes = require('../api/routes')
const { logs } = require('./vars')
const error = require('../api/shared/middlewares/error')
const strategies = require('./passport')
const mongoose = require('./mongo')
// Open mongoose connection
mongoose.connect()

/**
 * Express instanc
 * @public
 */
const app = express()

// Documentation api
app.use(express.static('public'))

// request logging. dev: console | production: file
app.use(morgan(logs))

// gzip compression
app.use(compress())

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride())

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// enable authentication
app.use(passport.initialize())
passport.use('jwt', strategies.jwt)

// mount api routes
app.use('/', routes)

// if error is not an instanceOf APIError, convert it.
app.use(error.converter)

// catch 404 and forward to error handler
app.use(error.notFound)

// error handler, send stacktrace only during development
app.use(error.handler)

module.exports = app
