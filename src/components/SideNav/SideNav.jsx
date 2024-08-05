import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import {
    MdDashboard,
    MdWaves,
    MdFactCheck,
    MdHelpOutline,
    MdOutlineAccountCircle
} from "react-icons/md";
import MenuItem from './MenuItem';

const NAVIGATION_ITEMS = [
    {
        label: "Dashboard",
        link: "/dashboard",
        icon: <MdDashboard />
    },
    {
        label: "Vibe",
        link: "/vibe",
        icon: <MdWaves />
    },
    {
        label: "Overview",
        link: "/overview",
        icon: <MdFactCheck />
    },
    {
        label: "Problem",
        link: "/problem",
        icon: <MdHelpOutline />
    },
    {
        label: "Profile",
        link: "/profile",
        icon: <MdOutlineAccountCircle />
    },
]

export default function SideNav({ active }) {

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
            <div className="flex flex-col flex-shrink-0 flex-grow-0 w-[240px] h-screen bg-slate-800">

                <Link to="/">
                    <img src={Logo} alt="Logo" className="w-full p-4 my-3" />
                </Link>
                {/* {profile && (
                        <div>
                            <h2>Profile</h2>
                            <p>Username: {profile.username}</p>
                        
                    )} */}

                <div className="flex flex-col space-y-1 pt-6">
                    {NAVIGATION_ITEMS.map(({ label, link, icon }) => (
                        <MenuItem label={label} link={link} icon={icon} active={label == active} />
                    ))}
                </div>


                <div className="bg-black p-3 text-white text-center text-xs mt-auto">Copyright © Liftoff 2024</div>

            </div>
        </>
    )
}