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

const Router= createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/dashboard",element:<Dashboard/>},
  {path:"/vibe",element:<VibeCheck/>},
  {path:"/problem",element:<Problem/>},
  {path:"/overview",element:<Overview/>},
  {path:"/founder",element:<h1 className='text-2xl flex justify-center'>Yet to be made or linked to router . Configure it in main.jsx</h1>},
  {path:"/login",element:<Login/>},
  {path:"/register",element:<Signup/>},
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
)
