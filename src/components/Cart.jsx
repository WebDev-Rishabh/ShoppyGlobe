import { useSelector } from 'react-redux';
import CartItem from './cartItem';
import { Link } from 'react-router-dom';
import emptyCartIcon from '../assets/Shopping.png';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart); 

  if (!cart.length) return (
    <div className='emptybody'>
  <p className='emptyCart'>Your cart is empty.</p>
  <img src={emptyCartIcon} alt="Empty Cart" className="emptyCart-icon" />
  </div>
  );

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <h2 className=''>Your Cart</h2>
    <div className="cart-list">
      
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      
    </div>
    <div className="cart-total">
        <p><strong>Total: </strong>${total.toFixed(2)}</p>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
