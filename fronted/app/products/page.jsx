import axios from 'axios'
import React from 'react'

async function getProducts() {
  const res = await axios.get((process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000') + '/api/products');
  return res.data;
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <li key={p._id} className="border p-4 rounded">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm">{p.description}</p>
            <p className="mt-2 font-bold">${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
