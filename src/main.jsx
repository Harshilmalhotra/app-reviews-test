import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from './routes/Dashboard.jsx';
import VibeCheck from './routes/VibeCheck.jsx';
import Signup from './routes/Register.jsx';
import Login from './routes/Login.jsx';
import Problem from './routes/Problem.jsx';
import Overview from './routes/Overview.jsx';
import Profile from './routes/Profile.jsx';

import { Provider } from 'react-redux';
import store from './redux/store';

const Router= createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/dashboard",element:<Dashboard/>},
  {path:"/vibe",element:<VibeCheck/>},
  {path:"/problem",element:<Problem/>},
  {path:"/overview",element:<Overview/>},
  {path:"/founder",element:<h1 className='text-2xl flex justify-center'>Yet to be made or linked to router . Configure it in main.jsx</h1>},
  {path:"/login",element:<Login/>},
  {path:"/register",element:<Signup/>},
  {path:"/profile",element:<Profile/>},
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={Router}/>
    </Provider>
  </React.StrictMode>
)
