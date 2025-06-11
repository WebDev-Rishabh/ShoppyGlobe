import { useLocation } from 'react-router-dom';
import useProducts from '../hooks/useProduct';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = () => {
  const { products, error, loading } = useProducts();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search')?.toLowerCase() || '';

  if (loading) return <div className="loader"></div>;
  if (error) return <p>Error: {error}</p>;

  const filteredProducts = products.filter(product =>
    (product.title || '').toLowerCase().includes(query)
  );

  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to ShoppyGlobe 🛍️</h1>
      <p className="homepage-subtitle">Find the best products at the best prices!</p>
      <div className="product-card-body">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
