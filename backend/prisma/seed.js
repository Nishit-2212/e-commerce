const { PrismaClient } = require('@prisma/client');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Product = require('../models/product.model');

const prisma = new PrismaClient();

async function seed() {
  try {
    const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/ecommerce';
    await mongoose.connect(mongoUrl);

    // create sample products in Mongo
    await Product.deleteMany({});
    await Product.create([
      { title: 'Sample T-Shirt', description: '100% cotton', price: 19.99 },
      { title: 'Sneakers', description: 'Comfortable running shoes', price: 79.99 }
    ]);

    // create sample user in Postgres via Prisma
    const hashed = await bcrypt.hash('password123', 10);
    await prisma.user.create({ data: { email: 'demo@example.com', password: hashed, name: 'Demo User' } });

    console.log('Seeding completed');
    process.exit(0);
  } catch (err) {
    console.error('Seed error', err);
    process.exit(1);
  }
}

seed();
