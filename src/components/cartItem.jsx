import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../redux/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
   
    dispatch(addToCart(item)); 
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.id)); 
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
  <img src={item.thumbnail} alt={item.title} className="product-image" />
  <div className="cart-info">
    <h4>{item.title}</h4>
    <p>Price: ${item.price}</p>
    <p>Quantity: {item.quantity}</p>
  </div>
  <div className="cart-buttons">
    <button onClick={handleIncrease}>+</button>
    <button onClick={handleDecrease}>-</button>
    <button onClick={handleRemove}>Remove</button>
  </div>
</div>

  );
};

export default CartItem;
