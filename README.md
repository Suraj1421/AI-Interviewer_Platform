# AIML Project Interviewer

An AI-powered mock interview platform designed to help users prepare for technical interviews through realistic, adaptive questioning and detailed performance analysis.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Components](#project-components)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **AI-Powered Interviews**: Dynamic interview questions generated using OpenRouter AI
- **User Authentication**: Secure authentication with Firebase
- **Interview History**: Track and review all previous interviews
- **Performance Reports**: Detailed analytics and feedback after each interview
- **Payment Integration**: Razorpay integration for premium features
- **Real-time Feedback**: Instant evaluation and suggestions
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠 Tech Stack

### Frontend
- **React** 18.x - UI library
- **Vite** - Fast build tool and dev server
- **Redux** - State management
- **Firebase** - Authentication and database
- **CSS3** - Styling

### Backend
- **Node.js** & **Express** - Server framework
- **MongoDB** - Database
- **OpenRouter API** - AI interview generation
- **Razorpay** - Payment processing
- **JWT** - Token-based authentication
- **Multer** - File upload handling

## 📁 Project Structure

```
AIML_project_interviewer/
├── client/                          # React frontend application
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── AuthModel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Step1SetUp.jsx       # Interview setup
│   │   │   ├── Step2Interview.jsx   # Interview interface
│   │   │   ├── Step3Report.jsx      # Performance report
│   │   │   └── Timer.jsx            # Interview timer
│   │   ├── pages/                   # Page components
│   │   │   ├── Auth.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── InterviewHistory.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   └── Pricing.jsx
│   │   ├── redux/                   # Redux store and slices
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── utils/
│   │   │   └── firebase.js          # Firebase configuration
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── server/                          # Express backend application
│   ├── routes/                      # API route definitions
│   │   ├── auth.route.js
│   │   ├── interview.route.js
│   │   ├── payment.route.js
│   │   └── user.route.js
│   ├── controllers/                 # Request handlers
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   ├── payment.controller.js
│   │   └── user.controller.js
│   ├── models/                      # Database schemas
│   │   ├── user.model.js
│   │   ├── interview.model.js
│   │   └── payment.model.js
│   ├── services/                    # External service integrations
│   │   ├── openRouter.service.js    # AI API integration
│   │   └── razorpay.service.js      # Payment processing
│   ├── middlewares/                 # Custom middleware
│   │   ├── isAuth.js                # Authentication middleware
│   │   └── multer.js                # File upload configuration
│   ├── config/                      # Configuration files
│   │   ├── connectDb.js             # MongoDB connection
│   │   └── token.js                 # JWT configuration
│   ├── index.js                     # Server entry point
│   └── package.json
│
└── README.md                        # This file
```

## 📦 Prerequisites

- **Node.js** >= 14.x
- **npm** or **yarn**
- **MongoDB** database
- **Firebase** project with authentication enabled
- **OpenRouter API** key
- **Razorpay** account (for payment functionality)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AIML_project_interviewer
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Port
PORT=5000

# Database
MONGODB_URI=mongodb://your_mongodb_connection_string
DB_NAME=aiml_interviewer

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRY=7d

# Firebase (if using Firebase Admin SDK)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email

# OpenRouter API
OPENROUTER_API_KEY=your_openrouter_api_key

# Razorpay Payment
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Frontend Configuration

Update `src/utils/firebase.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## 🎯 Running the Application

### Development Mode

#### Option 1: Run in Parallel Terminals

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

#### Option 2: Using Concurrently

From the root directory, add concurrently to dependencies and create start script.

The backend will be available at `http://localhost:5000`  
The frontend will be available at `http://localhost:5173`

### Production Build

#### Backend:
```bash
cd server
npm run build  # if applicable
```

#### Frontend:
```bash
cd client
npm run build
```

## 📡 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Interview Endpoints

- `POST /api/interview/start` - Start a new interview
- `GET /api/interview/history` - Get user's interview history
- `GET /api/interview/:id` - Get specific interview details
- `POST /api/interview/submit` - Submit interview answers

### User Endpoints

- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/stats` - Get user statistics

### Payment Endpoints

- `POST /api/payment/create-order` - Create Razorpay order
- `POST /api/payment/verify` - Verify payment

## 🔧 Project Components

### Frontend Components

| Component | Purpose |
|-----------|---------|
| `AuthModel` | Authentication modal dialog |
| `Navbar` | Navigation header |
| `Footer` | Footer section |
| `Step1SetUp` | Interview setup/configuration |
| `Step2Interview` | Main interview interface |
| `Step3Report` | Results and feedback display |
| `Timer` | Interview countdown timer |

### Backend Controllers

| Controller | Responsibility |
|-----------|-----------------|
| `auth.controller.js` | Handle authentication logic |
| `interview.controller.js` | Manage interview CRUD operations |
| `payment.controller.js` | Process payment transactions |
| `user.controller.js` | Manage user profile data |

### Services

| Service | Function |
|---------|----------|
| `openRouter.service.js` | AI-powered question generation |
| `razorpay.service.js` | Payment processing integration |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Support

For support, email your-email@example.com or open an issue on the repository.

## 🎓 Acknowledgments

- OpenRouter for AI capabilities
- Razorpay for payment processing
- Firebase for authentication
- Vite for fast development experience

---

**Last Updated**: March 2026
