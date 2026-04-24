import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
