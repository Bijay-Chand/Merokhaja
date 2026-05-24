import Restaurant from '../models/Restaurant.js';
import MenuItem from '../models/MenuItem.js';

// @desc    Get all restaurants
// @route   GET /api/restaurants
// @access  Public
const getRestaurants = async (req, res) => {
  try {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};

    const count = await Restaurant.countDocuments({ ...keyword });
    const restaurants = await Restaurant.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .populate('menuItems');

    res.json({
      restaurants,
      page,
      pages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single restaurant
// @route   GET /api/restaurants/:id
// @access  Public
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate('menuItems');

    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a restaurant
// @route   POST /api/restaurants
// @access  Private/Admin
const createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a restaurant
// @route   PUT /api/restaurants/:id
// @access  Private/Admin
const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
      restaurant.name = req.body.name || restaurant.name;
      restaurant.description = req.body.description || restaurant.description;
      restaurant.image = req.body.image || restaurant.image;
      restaurant.cuisineType = req.body.cuisineType || restaurant.cuisineType;
      restaurant.phone = req.body.phone || restaurant.phone;
      restaurant.deliveryTime = req.body.deliveryTime || restaurant.deliveryTime;
      restaurant.minimumOrder = req.body.minimumOrder || restaurant.minimumOrder;
      restaurant.deliveryFee = req.body.deliveryFee || restaurant.deliveryFee;
      restaurant.isOpen = req.body.isOpen !== undefined ? req.body.isOpen : restaurant.isOpen;

      const updatedRestaurant = await restaurant.save();
      res.json(updatedRestaurant);
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a restaurant
// @route   DELETE /api/restaurants/:id
// @access  Private/Admin
const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
      await restaurant.deleteOne();
      res.json({ message: 'Restaurant removed' });
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get food categories
// @route   GET /api/restaurants/categories
// @access  Public
const getCategories = async (req, res) => {
  try {
    const categories = await MenuItem.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getCategories,
};
