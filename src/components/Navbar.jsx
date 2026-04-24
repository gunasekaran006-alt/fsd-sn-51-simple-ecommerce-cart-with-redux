import { useSelector } from 'react-redux';

const Navbar = () => {
  const count = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#eee' }}>
      <h2>My Store</h2>
      <div style={{ fontWeight: 'bold' }}>🛒 Cart: {count}</div>
    </nav>
  );
};
export default Navbar;
