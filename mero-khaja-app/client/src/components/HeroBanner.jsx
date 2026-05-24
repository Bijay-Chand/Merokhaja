import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, ChevronRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">MeroKhaja</span> - Mitho Khana, Chito Delivery
        </h1>
        <p className="hero-subtitle">
          Order delicious food from your favorite restaurants in Mahendranagar. 
          Fast delivery, hot food, happy you!
        </p>
        <div className="hero-actions">
          <Link to="/restaurants" className="btn btn-primary btn-large">
            Order Now
          </Link>
          <Link to="/offers" className="btn btn-secondary btn-large">
            View Offers
          </Link>
        </div>
        <div className="hero-features">
          <div className="feature">
            <Clock size={24} />
            <span>Fast Delivery</span>
          </div>
          <div className="feature">
            <Star size={24} />
            <span>Quality Food</span>
          </div>
          <div className="feature">
            <MapPin size={24} />
            <span>Live Tracking</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-food.png" alt="Delicious Food" />
      </div>
    </section>
  );
};

export default HeroBanner;
