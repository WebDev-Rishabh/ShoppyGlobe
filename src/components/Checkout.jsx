import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const cartItems = useSelector(state => state.cart); 
  const [form, setForm] = useState({ name: '', address: '' });
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your order has been placed.`);
    navigate('/');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.title} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div>
              <label>Name:</label>
              <input
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Address:</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
