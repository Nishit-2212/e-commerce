const mongoose = require('mongoose');

async function connectMongo() {
  const uri = process.env.MONGO_URL;
  if (!uri) {
    throw new Error('MONGO_URL not set in environment');
  }
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');
}

module.exports = { connectMongo };
