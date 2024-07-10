import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/auth-demo', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

const secret = 'your_jwt_secret_key'; // Use a strong secret key

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token is required');
    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
};

app.post('/signout', authMiddleware, (req, res) => {
    // In a real-world scenario, you might handle session invalidation or token blacklisting
    res.send('Signed out successfully');
});

app.get('/profile', authMiddleware, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json({ username: user.username });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
