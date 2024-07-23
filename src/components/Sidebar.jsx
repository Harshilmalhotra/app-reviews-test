import Logo from '../assets/logo.png';
import Vibe from '../assets/vibe_check.png';
import Dashboard from '../assets/dashboard.png';
import Founder from '../assets/founder_desk.png';
import Overview from '../assets/overview.png';
import Profile from '../assets/profile.png';
import {Link} from 'react-router-dom';


import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate
import {BrowserRouter as Router,Routes,Route }from'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Sidebar() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate(); // Step 2: Initialize useNavigate

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
        <>
            <div className="flex flex-col w-[139px] h-screen bg-slate-600 px-[11px] py-[21px]">
                <img src={Logo} alt="Logo" className="w-[100px] h-[100px] "/>
                        {/* {profile && (
                                <div>
                                    <h2>Profile</h2>
                                    <p>Username: {profile.username}</p>
                              
                            )} */}
                <div className="flex flex-col space-y-6 pt-6">
                    <Link to="/dashboard" className='flex items-center flex-col'><img src={Dashboard} alt="Dashboard" className="w-[60px] h-[60px]"/>Dashboard</Link>
                    <Link to="/vibe" className='flex items-center flex-col'><img src={Vibe} alt="Vibe" className="w-[60px] h-[60px]"/>Vibe Check</Link>
                    <Link to="/overview" className='flex items-center flex-col'><img src={Overview} alt="Overview" className="w-[60px] h-[60px]"/>Overview</Link>
                    <Link to="/founder" className='flex items-center flex-col'><img src={Founder} alt="Founder" className="w-[60px] h-[60px]"/>Founder's Desk</Link>
                
                    {/* <button onClick={handleSignOut}>Sign Out</button> */}
                
                <a href="/profile " className='flex items-center flex-col'><img src={Profile} alt="Profile" className="w-[75px] h-[75px]"/> Profile</a>
                </div>
        </div>
        </>
    )
    }