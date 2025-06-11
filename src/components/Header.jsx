import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const cartCount = useSelector(state =>
    state.cart.reduce((sum, i) => sum + i.quantity, 0)
  );
  const wishCount = useSelector(state => state.wishlist.length);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/browse?search=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm('');
  };


  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav-logo">ShoppyGlobe</Link>
        <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className='searchbutton'><i class="fa-solid fa-magnifying-glass" ></i></button>
      </form>
        <div className="nav-right">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/wishlist">
             <i className="fas fa-heart"></i> ({wishCount})
          </Link>
          <Link className="nav-cart" to="/cart">
             <i className="fas fa-shopping-cart"></i> ({cartCount})
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;
