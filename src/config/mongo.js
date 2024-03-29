var mongoose = require('mongoose')
const { mongo, env } = require('./vars')

// Set mongoose Promise to Bluebird
mongoose.Promise = Promise

// Exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

// Print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true)
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  mongoose
    .connect(mongo.uri, {})
    .then(() => console.log('Connection stabilished successfully'))
    .catch((err) => console.log(err))
}

/**
 * Drop database, close the connection and stop mongod.
 */
exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

/**
 * Remove all the data for all db collections.
 */
exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    collection.deleteMany()
  }
}

exports.close = () => mongoose.disconnect()
