import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const count = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#222', color: '#fff' }}>
      <h2>TechStore</h2>
      <div style={{ fontSize: '1.2rem' }}>🛒 Cart Count: {count}</div>
    </nav>
  );
};

export default Navbar;
