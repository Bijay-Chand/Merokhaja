import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">MeroKhaja</h3>
          <p className="footer-tagline">Mitho Khana, Chito Delivery</p>
          <p className="footer-description">
            Your trusted food delivery partner in Mahendranagar, Sudurpashchim Nepal.
            Bringing delicious meals from your favorite restaurants to your doorstep.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/restaurants">Restaurants</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>📍 Mahendranagar, Kanchanpur</li>
            <li>📞 +977-99-XXXXXXX</li>
            <li>✉️ support@merokhaja.com.np</li>
            <li>🕒 24/7 Customer Support</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MeroKhaja. All rights reserved.</p>
        <p>Made with ❤️ in Nepal</p>
      </div>
    </footer>
  );
};

export default Footer;
