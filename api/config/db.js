// import mongoose library
const mongoose = require('mongoose')

// connect with mongodb
const connectDb = async () => {
  try {
    // stablish a connection with mongodb server
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb connected ${conn.connection.host}`)

  } catch (e) {
    // handle error
    process.exit(1)
  }
}

module.exports = connectDb