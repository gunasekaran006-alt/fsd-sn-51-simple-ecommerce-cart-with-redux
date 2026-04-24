import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', marginTop: '30px', borderTop: '2px solid #eee' }}>
      <h3>Your Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f4f4f4', marginBottom: '5px' }}>
            <span>{item.name} - ${item.price}</span>
            <button 
              onClick={() => dispatch(removeItem(item.id))} 
              style={{ color: 'red', border: 'none', cursor: 'pointer' }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
