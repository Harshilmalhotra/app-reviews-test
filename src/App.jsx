import { Link } from 'react-router-dom';

import 'chart.js/auto';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideNav from './components/SideNav/SideNav';

const App = () => {

    useEffect(() => {
        document.title = 'App Reviews';
    }, []);


    return (
        <div class="flex">
            <SideNav />
            <div className='bg-slate-700 text-white p-6 w-full'>
                <h1>Welcome!</h1>
                <div className="flex items-center space-x-2">
                    <Link to="/register">Register</Link>
                    <span class="italic text-sm">or</span>
                    <Link to="/login">Login</Link>

                </div>

                <marquee color="white" scrollamount="12" className='text-white/50 font-light my-6'>
                    This is a component based website. all the pages are present in routes folder. and page components are present in components folder. Kindly follow the same file structue for making any additions to the page.
                </marquee>

                <div className='text-4xl'>
                    This is landing page of app reviews
                </div>
            </div>

        </div>
    );
};

export default App;