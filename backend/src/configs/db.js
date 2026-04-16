const mongoose = require('mongoose')
require("dotenv").config()
module.exports = () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/quizdb';
  console.log(`🔌 Attempting to connect to: ${uri.includes('localhost') || uri.includes('127.0.0.1') ? 'Local Database (Compass)' : 'External Database (Atlas)'}`);
  return mongoose.connect(uri);
}

