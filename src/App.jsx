import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import ProductList from './components/ProductList';
import './App.css';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/cart';
// import NotFound from './components/NotFound';

// const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/cart'));
const NotFound = lazy(() => import('./components/NotFound'));
const Checkout = lazy(() => import('./components/checkout'));
const Wishlist = lazy(() => import('./components/Wishlist'));

function App() {
  return (
    <>
    <Suspense fallback={<div className='loader'></div>}>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Wishlist" element={<Wishlist />} /> 
        <Route path="/browse" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  );
}
export default App;