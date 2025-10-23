require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const { connectMongo } = require('./config/mongo');
const { prisma } = require('./config/prismaClient');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.json({ ok: true, message: 'E-Commerce backend running' }));

const port = process.env.PORT || 4000;

async function start() {
  try {
    await prisma.$connect();
    await connectMongo();
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();

module.exports = app;
