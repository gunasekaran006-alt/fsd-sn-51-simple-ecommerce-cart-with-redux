import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
// import Cart from './components/Cart'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>🛒 Simple Redux Store</h1>
        <ProductList />
        {/* <Cart /> */}
      </div>
    </div>
  );
}

export default App;
