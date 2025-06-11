import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toggleWishlist } from '../redux/wishlistSlice';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setError('Failed to fetch product details.'));
  }, [id]);


  const wishlisted = useSelector(state =>
    product ? state.wishlist.some(p => p.id === product.id) : false
  );

  const handleWishlist = e => {
    e.preventDefault();
    if (product) dispatch(toggleWishlist(product));
  };

  const handleCart = e => {
    e.preventDefault();
    if (product) dispatch(addToCart(product));
  };

  if (error) return <p className="error-msg">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-body">
      <div className="product-detail">
        <div className="imageandtitle">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="detail-image"
          />

          <div className="title-and-rating">
            <h2>{product.title}</h2>
            <div className="rating">
              <span className="star filled">★</span>
              <span className="rating-value">{product.rating.toFixed(1)}</span>
            </div>
            <div className="price-detail">Price: ${product.price}</div>
          </div>
        </div>

        <div className="Description">
          <div className="discription-title">Description:</div>
          <p>{product.description}</p>
        </div>

        <div className="button-row">
          <button
            className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
            onClick={handleWishlist}
            title="Wishlist"
          >
            {wishlisted ? '❤️' : '🤍'}
          </button>

          <button className="btn-add" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
