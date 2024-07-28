import './App.css';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    return (
        <div>
            <div className='bg-black text-white'>
                <h1>Welcome!</h1>
                <Link to="/register">Register</Link>
                <br />
                or
                <br />
                <Link to="/login">Login</Link>

                <marquee color="red" scrollamount="12" className='text-red-600 text-xl font-bold'>
                    This is a component based website. all the pages are present in routes folder. and page components are present in components folder. Kindly follow the same file structue for making any additions to the page.
                </marquee>
            </div>

            <div>
                <Link to="/dashboard">Dashboard</Link><br/>
                <Link to="/vibe">Vibe Check</Link><br/>
                <Link to="/overview">Overview</Link><br/>
                <Link to="/problem">Problem</Link><br/>
            </div>

        <div className='text-4xl'>
            This is landing page of app reviews
        </div>


        </div>
    );
};

export default App;