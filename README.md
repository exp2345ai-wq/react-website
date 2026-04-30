# TaruGuardians - Full Stack Project

## Quick Start

### Prerequisites

1. **Node.js** (v16 or higher)
2. **MongoDB** (local or Atlas cloud)
3. **Git** (optional)

### Setup Steps

#### 1. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Or use the startup script (Windows)
start.bat

# Or use the startup script (Linux/Mac)
chmod +x start.sh
./start.sh
```

#### 2. Configure Environment Variables

Copy the example file and configure:

```bash
# In the backend folder
cp .env.example .env
```

Edit `.env` with your values:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/taruguardians

# Google OAuth (REQUIRED for Google Sign-In)
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret

# JWT Secrets (change these in production!)
JWT_SECRET=your-secure-random-string
JWT_REFRESH_SECRET=another-secure-random-string

# Server
PORT=5000
NODE_ENV=development
```

#### 3. Setup MongoDB

**Option A: Local MongoDB**
```bash
# Start MongoDB
mongod

# Or with custom path
mongod --dbpath /path/to/data
```

**Option B: MongoDB Atlas (Cloud)**
1. Create free account at https://www.mongodb.com/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

#### 4. Google OAuth Setup (Required for Google Sign-In)

1. Go to https://console.cloud.google.com/
2. Create new project or select existing
3. Enable "Google+ API"
4. Go to Credentials > Create Credentials > OAuth Client ID
5. Application type: Web application
6. Add authorized origins:
   - `http://localhost:5000`
7. Copy Client ID and Client Secret to `.env`

#### 5. Start the Server

```bash
cd backend
npm start
```

Server will run at: http://localhost:5000

## Project Structure

```
Taru Backend/
├── backend/
│   ├── config/
│   │   ├── db.js          # MongoDB connection
│   │   └── passport.js     # Google OAuth verification
│   ├── middleware/
│   │   └── auth.js        # JWT authentication
│   ├── models/
│   │   └── User.js        # User model
│   ├── routes/
│   │   ├── admin.js       # Admin routes
│   │   ├── auth.js        # Auth routes (login, signup, google)
│   │   └── user.js        # User routes
│   ├── server.js         # Express server
│   ├── .env               # Environment variables (create this)
│   └── .env.example       # Example env file
│
├── frontend-auth.js        # Shared auth logic
├── auth.html               # Login/Signup page
├── dashboard.html          # User dashboard
├── admin.html             # Admin panel
├── index.html             # Loader page
├── TARUGUARDIANS FIRST PAGE.html  # Main website (desktop)
└── responsive part mobile.html    # Main website (mobile)
```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login with email/password |
| POST | `/api/auth/google` | Google Sign-In |
| POST | `/api/auth/logout` | Logout |
| POST | `/api/auth/refresh` | Refresh JWT token |
| GET | `/api/auth/me` | Get current user |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get user profile |
| PUT | `/api/users/profile` | Update user profile |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/users` | List all users |
| GET | `/api/admin/users/:id` | Get user by ID |
| PUT | `/api/admin/users/:id` | Update user (role, status) |
| DELETE | `/api/admin/users/:id` | Delete user |

### Config
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/config` | Get public config (Google Client ID) |
| GET | `/api/health` | Health check |

## Troubleshooting

### "API endpoint not found" Error
- Ensure backend server is running: `npm start` in backend folder
- Check MongoDB is running
- Verify `.env` file exists with correct values

### "Google Sign-In is not configured"
- Verify `GOOGLE_CLIENT_ID` is set in `.env`
- Ensure Google OAuth credentials are correct
- Check browser console for errors

### "Connection error. Please try again"
- Backend server might not be running
- MongoDB connection issue
- Check CORS settings in `server.js`

### Login button opens index.html instead of auth.html
- This is expected behavior - index.html is a loader that redirects
- Click Login on the redirected page (TARUGUARDIANS FIRST PAGE.html)
- Or navigate directly to: http://localhost:5000/auth.html

### MongoDB Connection Failed
1. Check if MongoDB is running: `mongod`
2. Verify connection string in `.env`
3. For Atlas: Check network access settings (allow 0.0.0.0/0)

## Development

### Running in Development Mode
```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Production Considerations
1. Change JWT secrets to strong random values
2. Use HTTPS
3. Set proper CORS origins
4. Use production MongoDB
5. Set `NODE_ENV=production`
6. Secure the admin account

## Default Admin Account
After first startup, an admin account is created:
- Email: admin@taruguardians.club
- Password: admin123456

**Change these credentials in production!**

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Three.js, GSAP
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Auth**: JWT, Google OAuth
- **Styling**: Custom CSS with animations

## License

Private project - TaruGuardians
