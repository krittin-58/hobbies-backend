require('dotenv').config()
const mongoose = require('mongoose')

const mongodb = process.env.MONGODB_CONNECTING_URI

mongoose.connect(mongodb);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

module.exports = db