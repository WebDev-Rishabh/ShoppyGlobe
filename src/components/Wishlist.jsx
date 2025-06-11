import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
import './Wishlist.css';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  if (!wishlist.length) {
    return <p className="empty-wishlist">Your wishlist is empty.</p>;
  }

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map(item => (
          <div className="wishlist-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div className="wishlist-actions">
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(toggleWishlist(item))}>
                Remove
              </button>
            </div>
            <Link to={`/product/${item.id}`} className="details-link">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
