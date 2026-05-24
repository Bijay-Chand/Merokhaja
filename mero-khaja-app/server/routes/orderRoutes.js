import express from 'express';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderStatus,
  updateOrderTracking,
  getOrders,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, admin, getOrders).post(protect, addOrderItems);
router.get('/myorders', protect, getMyOrders);
router
  .route('/:id')
  .get(protect, getOrderById)
  .put(protect, updateOrderToPaid);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/status', protect, admin, updateOrderStatus);
router.put('/:id/track', protect, updateOrderTracking);

export default router;
