# 🍽️ MeroKhaja - Food Delivery Platform

**Mitho Khana, Chito Delivery** (Delicious Food, Fast Delivery)

A modern food delivery application built with the MERN stack for Mahendranagar, Sudurpashchim, Nepal.

![MeroKhaja Banner](./client/src/assets/hero.png)

## 🚀 Features

### For Customers
- ✅ Browse restaurants and menus
- ✅ Search and filter by cuisine
- ✅ Real-time cart management
- ✅ Multiple payment options (COD & Online)
- ✅ Live order tracking
- ✅ Ratings and reviews
- ✅ User authentication
- ✅ Order history
- ✅ Dark mode support

### For Restaurants
- ✅ Menu management
- ✅ Order notifications
- ✅ Status updates
- ✅ Analytics dashboard

### For Riders
- ✅ Order assignments
- ✅ Route optimization
- ✅ Delivery tracking

## 🎨 Brand Identity

### Colors
- **Primary Red**: `#FF4D4D`
- **Primary Orange**: `#FF9F1C`
- **White**: `#FFFFFF`
- **Dark Gray**: `#2D3748`

### Typography
- **Headings**: Poppins (Bold, Modern)
- **Body**: Inter (Clean, Readable)

### Logo Concept
- Food + Delivery combination
- Scooter/Food bowl icon
- Clean minimal vector style
- App-icon friendly

## 🛠️ Tech Stack

### Frontend
- React 19+ with Vite
- React Router DOM
- Context API for state management
- Lucide React icons
- Axios for API calls
- CSS3 with custom variables

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

## 📁 Project Structure

```
mero-khaja-app/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── assets/        # Images & static files
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── RestaurantCard.jsx
│   │   │   └── FoodCard.jsx
│   │   ├── context/       # React Context providers
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── pages/         # Page components
│   │   │   └── HomePage.jsx
│   │   ├── utils/         # Utility functions
│   │   │   └── api.js
│   │   ├── App.jsx        # Main app component
│   │   ├── App.css        # Component styles
│   │   ├── index.css      # Global styles
│   │   └── main.jsx       # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                # Node.js Backend
│   ├── config/           # Database configuration
│   │   └── db.js
│   ├── controllers/      # Business logic
│   │   ├── userController.js
│   │   ├── restaurantController.js
│   │   └── orderController.js
│   ├── middleware/       # Custom middleware
│   │   └── authMiddleware.js
│   ├── models/           # Mongoose schemas
│   │   ├── User.js
│   │   ├── Restaurant.js
│   │   ├── MenuItem.js
│   │   └── Order.js
│   ├── routes/           # API routes
│   │   ├── userRoutes.js
│   │   ├── restaurantRoutes.js
│   │   └── orderRoutes.js
│   ├── .env              # Environment variables
│   ├── server.js         # Express app entry
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd mero-khaja-app
```

2. **Install Backend Dependencies**
```bash
cd server
npm install
```

3. **Configure Environment Variables**
Create `.env` file in server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/merokhaja
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. **Start Backend Server**
```bash
npm run dev
# or
nodemon server.js
```

5. **Install Frontend Dependencies**
```bash
cd ../client
npm install
```

6. **Start Frontend Development Server**
```bash
npm run dev
```

7. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📱 App Features

### Homepage Sections
1. **Hero Banner** - Attractive welcome section with CTA
2. **Search Bar** - Find restaurants and food items
3. **Food Categories** - Browse by cuisine type
4. **Popular Restaurants** - Top-rated local restaurants
5. **Fast Delivery** - Quick delivery options
6. **Download App CTA** - Mobile app promotion
7. **Footer** - Contact info and social links

### API Endpoints

#### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile

#### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant by ID
- `GET /api/restaurants/categories` - Get food categories

#### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/myorders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/status` - Update order status

## 🎯 Target Audience

- Students in Mahendranagar
- Families looking for convenient meals
- Office workers during lunch breaks
- Local restaurants wanting online presence
- Cafe owners
- Food enthusiasts

## 🌍 Location Focus

**Mahendranagar, Sudurpashchim Province, Nepal**
- Coordinates: 29.2489° N, 80.5867° E
- Local cuisine integration
- Nepali language support
- Local payment methods (eSewa, Khalti, COD)

## 📄 License

MIT License - feel free to use this project for learning and commercial purposes.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

Inspired by:
- Foodmandu (Nepal)
- Pathao Food
- Zomato
- Swiggy
- Uber Eats

---

**Made with ❤️ in Nepal**

*Bringing delicious meals from your favorite restaurants to your doorstep in Mahendranagar!*
