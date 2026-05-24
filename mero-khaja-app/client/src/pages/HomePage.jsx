import React, { useState, useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import RestaurantCard from '../components/RestaurantCard';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import { getRestaurants, getCategories } from '../utils/api';
import { Search, Utensils, TrendingUp, Zap } from 'lucide-react';

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [restaurantsData, categoriesData] = await Promise.all([
          getRestaurants(),
          getCategories(),
        ]);
        setRestaurants(restaurantsData.restaurants || []);
        setCategories(categoriesData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <HeroBanner />

      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <Search size={24} />
          <input
            type="text"
            placeholder="Search for restaurants or food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">
          <Utensils size={28} />
          Food Categories
        </h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category} className="category-card">
              <span className="category-icon">🍽️</span>
              <span className="category-name">{category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="restaurants-section">
        <h2 className="section-title">
          <TrendingUp size={28} />
          Popular Restaurants in Mahendranagar
        </h2>
        {loading ? (
          <div className="loading">Loading restaurants...</div>
        ) : (
          <div className="restaurants-grid">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </section>

      {/* Fast Delivery Section */}
      <section className="fast-delivery-section">
        <h2 className="section-title">
          <Zap size={28} />
          Fastest Delivery Near You
        </h2>
        <div className="delivery-info">
          <p>Get your food delivered in under 30 minutes!</p>
          <div className="delivery-stats">
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Minutes</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Restaurants</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="download-cta">
        <h2>Download MeroKhaja App</h2>
        <p>Get exclusive offers and track your orders in real-time</p>
        <div className="app-buttons">
          <button className="app-btn">
            <span>📱</span> Download for Android
          </button>
          <button className="app-btn">
            <span>🍎</span> Download for iOS
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
