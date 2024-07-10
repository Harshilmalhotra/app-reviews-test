import Dashboard from '../routes/Dashboard'
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate
import {BrowserRouter as Router,Routes,Route }from'react-router-dom';

// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate(); // Step 2: Initialize useNavigate
   

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            alert('Logged in successfully');
            navigate('/dashboard'); // Step 3: Navigate to login page

        } catch (error) {
            alert('Invalid credentials');
        }
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
                
                <button onClick={handleLogin}>Login</button>
              
            </div>
            <div>
                Don't have an account? <a href="/register">Register</a>
            </div>
        </div>
    );
};

export default App;
