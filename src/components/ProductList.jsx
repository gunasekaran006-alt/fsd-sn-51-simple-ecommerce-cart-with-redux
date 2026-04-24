import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'iPhone 15', price: 800 },
  { id: 2, name: 'AirPods Pro', price: 250 },
  { id: 3, name: 'MacBook M3', price: 1200 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h3>Available Products</h3>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
          <strong>{product.name}</strong> - ${product.price}
          <button 
            onClick={() => dispatch(addItem(product))} 
            style={{ marginLeft: '15px', cursor: 'pointer' }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
