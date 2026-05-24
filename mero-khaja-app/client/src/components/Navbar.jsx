import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { getCartCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">MeroKhaja</span>
          <span className="tagline">Mitho Khana, Chito Delivery</span>
        </Link>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/restaurants" className="nav-link">Restaurants</Link>
          </li>
          <li className="nav-item">
            <Link to="/offers" className="nav-link">Offers</Link>
          </li>
          {isAuthenticated && (
            <li className="nav-item">
              <Link to="/orders" className="nav-link">My Orders</Link>
            </li>
          )}
        </ul>

        <div className="nav-actions">
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="user-menu">
              <Link to="/profile" className="user-icon">
                <User size={24} />
                <span className="user-name">{user?.name}</span>
              </Link>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
