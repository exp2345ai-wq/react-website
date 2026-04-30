const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/taruguardians', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    college: { type: String },
    year: { type: String },
    events: [{ type: String }],
    certificates: [{
        certificateId: String,
        certificateName: String,
        issueDate: { type: Date, default: Date.now },
        filePath: String
    }],
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// JWT Secret
const JWT_SECRET = 'your_jwt_secret_key';

// Email Configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

// File Upload Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/certificates/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

// Routes

// User Registration
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, phone, college, year } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            college,
            year
        });

        await newUser.save();

        // Send welcome email
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Welcome to TaruGuardians!',
            html: `
                <h2>Welcome to TaruGuardians, ${name}!</h2>
                <p>Thank you for registering with us. We're excited to have you as part of our community.</p>
                <p>You can now login to your account and access all features.</p>
                <br>
                <p>Best regards,<br>TaruGuardians Team</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Send login notification email to admin
        const adminMailOptions = {
            from: 'your-email@gmail.com',
            to: 'admin@taruguardians.club',
            subject: 'New User Login - TaruGuardians',
            html: `
                <h3>New User Login</h3>
                <p><strong>User:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>College:</strong> ${user.college}</p>
                <p><strong>Year:</strong> ${user.year}</p>
                <p><strong>Login Time:</strong> ${new Date().toLocaleString()}</p>
            `
        };

        await transporter.sendMail(adminMailOptions);

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                college: user.college,
                year: user.year
            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Middleware to verify token
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// Get user profile
app.get('/api/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Add certificate to user
app.post('/api/users/:userId/certificates', upload.single('certificate'), async (req, res) => {
    try {
        const { userId } = req.params;
        const { certificateName } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newCertificate = {
            certificateId: 'CERT' + Date.now(),
            certificateName,
            filePath: req.file.path
        };

        user.certificates.push(newCertificate);
        await user.save();

        // Send certificate notification email to user
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: user.email,
            subject: 'New Certificate Added - TaruGuardians',
            html: `
                <h2>Hello ${user.name}!</h2>
                <p>A new certificate has been added to your profile:</p>
                <p><strong>Certificate:</strong> ${certificateName}</p>
                <p><strong>Issue Date:</strong> ${new Date().toLocaleDateString()}</p>
                <p>You can now download this certificate from your profile.</p>
                <br>
                <p>Best regards,<br>TaruGuardians Team</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.json({
            message: 'Certificate added successfully',
            certificate: newCertificate
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get user certificates
app.get('/api/users/:userId/certificates', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user.certificates);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get all users (for admin)
app.get('/api/users', authMiddleware, async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Download certificate
app.get('/api/certificates/:certificateId/download', async (req, res) => {
    try {
        const { certificateId } = req.params;

        const user = await User.findOne({ 'certificates.certificateId': certificateId });
        if (!user) {
            return res.status(404).json({ message: 'Certificate not found' });
        }

        const certificate = user.certificates.find(cert => cert.certificateId === certificateId);
        if (!certificate) {
            return res.status(404).json({ message: 'Certificate not found' });
        }

        const filePath = path.join(__dirname, certificate.filePath);
        res.download(filePath);

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});