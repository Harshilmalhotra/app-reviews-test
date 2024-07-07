import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from './routes/Dashboard.jsx';
import VibeCheck from './routes/VibeCheck.jsx';

const Router= createBrowserRouter([
  {path:"/",element:<Dashboard/>},
  {path:"/dashboard",element:<Dashboard/>},
  {path:"/vibe",element:<VibeCheck/>},
  {path:"/problem",element:<h1 className='text-2xl flex justify-center'>Yet to be made or linked to router . Configure it in main.jsx</h1>},
  {path:"/overview",element:<h1 className='text-2xl flex justify-center'>Yet to be made or linked to router . Configure it in main.jsx</h1>},
  {path:"/founder",element:<h1 className='text-2xl flex justify-center'>Yet to be made or linked to router . Configure it in main.jsx</h1>},
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
)
