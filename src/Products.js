import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Phone', price: 500 },
    { id: 2, name: 'Laptop', price: 1000 }
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const addProduct = () => {
    setProducts([
      ...products,
      { id: Date.now(), name: newProduct.name, price: parseInt(newProduct.price) }
    ]);
    setNewProduct({ name: '', price: '' });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const updateProduct = (id, key, value) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, [key]: value } : p
    ));
  };

  return (
    <div className="products-container">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <input
            value={product.name}
            onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
          />
          <input
            type="number"
            value={product.price}
            onChange={(e) => updateProduct(product.id, 'price', e.target.value)}
          />
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
      <div className="add-product">
        <input
          placeholder="Product name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={addProduct}>Add</button>
      </div>
    </div>
  );
}

export default Products;
