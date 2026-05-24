import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant._id}`} className="restaurant-card">
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} />
        {!restaurant.isOpen && (
          <div className="closed-badge">Closed</div>
        )}
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <div className="restaurant-meta">
          <div className="rating">
            <Star size={16} fill="#FF9F1C" color="#FF9F1C" />
            <span>{restaurant.rating.toFixed(1)}</span>
            <span className="reviews">({restaurant.totalReviews})</span>
          </div>
          <div className="delivery-time">
            <Clock size={16} />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
        <div className="restaurant-details">
          <div className="cuisine-type">
            {restaurant.cuisineType?.join(', ')}
          </div>
          <div className="location">
            <MapPin size={14} />
            <span>{restaurant.address?.city || 'Mahendranagar'}</span>
          </div>
        </div>
        <div className="restaurant-footer">
          <span className="minimum-order">
            Min. Rs. {restaurant.minimumOrder}
          </span>
          <span className="delivery-fee">
            {restaurant.deliveryFee === 0 ? 'Free Delivery' : `Rs. ${restaurant.deliveryFee} delivery`}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
