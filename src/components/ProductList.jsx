import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'iPhone 15', price: 80000 },
  { id: 2, name: 'AirPods Pro', price: 20000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h3>Products</h3>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <span>{product.name} - ₹{product.price}</span>
          <button onClick={() => dispatch(addItem(product))} style={{ marginLeft: '10px' }}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
