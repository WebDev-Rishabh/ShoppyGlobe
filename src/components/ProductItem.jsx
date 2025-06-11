import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addToCart } from '../redux/cartSlice';
import { toggleWishlist } from '../redux/wishlistSlice';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishlisted = useSelector(state =>
    state.wishlist.some(p => p.id === product.id)
  );

  const handleWishlist = e => {
    e.preventDefault();          
    dispatch(toggleWishlist(product));
    setWishlisted((prev) => !prev);
  };

  const handleCart = e => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/product/${product.id}`} className="details-link">
      <div className="productItem">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <h3>{product.title}</h3>
        

        <div className="priceandcart">
          <span className="star filled">★</span>
          <span className="rating-value">{product.rating.toFixed(1)}</span>
        </div>
        <div className="price">Price: ${product.price}</div>
       
        <div className="button-row">
        <button
          className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
          onClick={handleWishlist}
          title="Wishlist"
        >
          {wishlisted ? '❤️' : '🤍'}
        </button>

          <button className="btn-add" onClick={handleCart}>
            Add to Cart <i className="fas fa-shopping-cart"></i>
          </button>
        </div>

       
        <div className="shippingWrapper">
          <span className="shippingInformation">{product.shippingInformation}</span>
        </div>
      </div>
    </Link>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    rating: PropTypes.number,
    shippingInformation: PropTypes.string,
  }).isRequired,
};

export default ProductItem;
