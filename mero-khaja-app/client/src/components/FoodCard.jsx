import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const FoodCard = ({ item }) => {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  
  const cartItem = cartItems.find((i) => i._id === item._id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleIncrement = () => {
    updateQuantity(item._id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      removeFromCart(item._id);
    } else {
      updateQuantity(item._id, quantity - 1);
    }
  };

  return (
    <div className="food-card">
      <div className="food-image">
        <img src={item.image} alt={item.name} />
        {item.isVegetarian && (
          <span className="veg-badge">Veg</span>
        )}
      </div>
      <div className="food-info">
        <h3 className="food-name">{item.name}</h3>
        <p className="food-description">{item.description}</p>
        <div className="food-meta">
          <span className="food-price">Rs. {item.price}</span>
          <span className="food-time">{item.preparationTime}</span>
        </div>
        <div className="food-actions">
          {quantity > 0 ? (
            <div className="quantity-control">
              <button onClick={handleDecrement} className="qty-btn">
                <Minus size={16} />
              </button>
              <span className="qty-value">{quantity}</span>
              <button onClick={handleIncrement} className="qty-btn">
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
