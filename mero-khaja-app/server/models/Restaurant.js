import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '/images/default-restaurant.jpg',
    },
    cuisineType: [String],
    address: {
      street: String,
      city: {
        type: String,
        default: 'Mahendranagar',
      },
      province: {
        type: String,
        default: 'Sudurpashchim',
      },
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        default: [80.5867, 29.2489],
      },
    },
    phone: {
      type: String,
      required: true,
    },
    email: String,
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    deliveryTime: {
      type: String,
      default: '30-40 mins',
    },
    minimumOrder: {
      type: Number,
      default: 100,
    },
    deliveryFee: {
      type: Number,
      default: 50,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    menuItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem',
      },
    ],
  },
  {
    timestamps: true,
  }
);

restaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
