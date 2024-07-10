
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './routes/Dashboard'
import VibeCheck from './routes/VibeCheck'
import Sidebar from './components/Sidebar'
import Login from './routes/Login'
import Signup from './routes/Register'

import {BrowserRouter as Router,Routes,Route }from'react-router-dom';

// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [profile, setProfile] = useState(null);

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/register', { username, password });
            alert('User registered successfully');
        } catch (error) {
            alert('Error registering user');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            alert('Logged in successfully');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    const handleSignOut = () => {
        setToken(null);
        localStorage.removeItem('token');
        alert('Signed out successfully');
    };

    useEffect(() => {
        const fetchProfile = async () => {
            if (token) {
                try {
                    const response = await axios.get('http://localhost:5000/profile', {
                        headers: { Authorization: token }
                    });
                    setProfile(response.data);
                } catch (error) {
                    console.error('Error fetching profile');
                }
            }
        };
        fetchProfile();
    }, [token]);

    return (
        <div>
            <h1>Auth Demo</h1>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleRegister}>Register</button>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
            {profile && (
                <div>
                    <h2>Profile</h2>
                    <p>Username: {profile.username}</p>
                </div>
            )}
        </div>
    );
};

export default App;
