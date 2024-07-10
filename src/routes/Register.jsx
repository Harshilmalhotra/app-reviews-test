import Login from '../routes/Login'

import {BrowserRouter as Router,Routes,Route }from'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate(); // Step 2: Initialize useNavigate

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/register', { username, password });
            alert('User registered successfully');
            navigate('/login'); // Step 3: Navigate to login page
        } catch (error) {
            alert('Error registering user');
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
                <button onClick={handleRegister}>Register</button>
               
            </div>
            
        </div>
    );
};

export default Register;
