const mongoose = require('mongoose');
const keys = require('../config/keys');
const connection = {};

const connectDb = async () => {
  try {
    if (connection.isConnected) {
      // Use existing database connection
      console.log('Using existing connection');
      return;
    }
    // Use new database connection
    const db = await mongoose.connect(keys.mongoURI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDb;
