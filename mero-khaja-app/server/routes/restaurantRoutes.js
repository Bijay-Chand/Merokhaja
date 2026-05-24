import express from 'express';
import {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getCategories,
} from '../controllers/restaurantController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getRestaurants).post(protect, admin, createRestaurant);
router.get('/categories', getCategories);
router
  .route('/:id')
  .get(getRestaurantById)
  .put(protect, admin, updateRestaurant)
  .delete(protect, admin, deleteRestaurant);

export default router;
