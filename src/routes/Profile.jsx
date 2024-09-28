import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SideNav from '../components/SideNav/SideNav';
import { IoIosAppstore } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { MdGeneratingTokens } from "react-icons/md";
import { IoRefreshCircle } from "react-icons/io5"; 

export default function Profile() {
  const [credits, setCredits] = useState(100); // Initial credits
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate(); // Hook for navigation

  const refreshCost = 20; // Cost of refreshing

  useEffect(() => {
    document.title = 'Profile | App Reviews';
  }, []);

  const handleRefresh = () => {
    if (credits >= refreshCost) {
      setIsRefreshing(true);
      setIsModalOpen(false); // Close the modal
      setCredits(credits - refreshCost); // Deduct credits

      // Simulate a refresh action (e.g., API call)
      setTimeout(() => {
        setIsRefreshing(false);
        navigate('/dashboard'); // Redirect to the dashboard after refresh
      }, 1000);
    } else {
      alert('Not enough credits to refresh!');
    }
  };

  const handleAddCredits = () => {
    // Simulate adding credits
    setCredits(credits + 100);
    alert('Credits added successfully!');
  };

  return (
    <div className="flex bg-slate-700 min-h-screen"> {/* Main container with min height */}
      <SideNav active="Profile" /> {/* Side Navigation */}

      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between">
          <div className='text-4xl pb-9'>Profile</div>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md bg-slate-800 mb-10"> {/* Table container with background */}
          <div className="divide-y divide-slate-700 p-4 space-y-4">
            <h1 className='text-xl text-white'>Links</h1>

            {/* App Store Link */}
            <div className="flex items-center justify-between pt-4 ">
              <div className="flex items-center">
                <IoIosAppstore className="text-2xl mr-2" />{/* App store icon */}
                <span className="text-white">App Store Link</span>
              </div>
              <input
                type="text"
                value="https://com.apk1"
                className="input input-disabled w-full max-w-xs bg-slate-600 text-white ml-4"
                disabled
                aria-label="App Store Link"
              />
            </div>

            {/* Play Store Link */}
            <div className="flex items-center justify-between pt-4 ">
              <div className="flex items-center">
                <IoLogoGooglePlaystore className="text-2xl mr-2" />
                <span className="text-white">Play Store Link</span>
              </div>
              <input
                type="text"
                value="https://com.apk1"
                className="input input-disabled w-full max-w-xs bg-slate-600 text-white ml-4"
                disabled
                aria-label="Play Store Link"
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md bg-slate-800 mb-10">
          <div className="divide-y divide-slate-700 p-4 space-y-4">
            <h1 className='text-xl text-white p-1'>Billing and Credits</h1>
            
            {/* Credits Left */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MdGeneratingTokens className="text-2xl mr-2" />
                <span className="text-white">Credits Left</span>
              </div>
              <div className="flex items-center">
                @
                <span className="text-white"> {credits} </span>
                <button className="btn btn-ghost text-white ml-4" onClick={handleAddCredits}>
                  Add More Credits
                </button>
              </div>
            </div>

            {/* Billing Details */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BsFillCreditCard2FrontFill className="text-2xl mr-2" />
                <span className="text-white">Billing Details</span>
              </div>
              <button className="btn btn-ghost text-white ml-4">Click here to view details</button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md bg-slate-800">
          <div className="divide-y divide-slate-700 p-4 space-y-4">
            <h1 className='text-xl text-white p-1'>Content Refresh</h1>
            
            <div className="flex items-center justify-between">
              <p className='w-8/12 text-wrap text-justify'>
                Refresh to get insights of latest data.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-ghost text-white flex items-center"
                disabled={credits < refreshCost || isRefreshing}
              >
                {isRefreshing ? (
                  <IoRefreshCircle className="animate-spin text-2xl" />
                ) : (
                  <IoRefreshCircle className="text-2xl" />
                )}
                <span className="ml-2">{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Confirmation */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-800 rounded-lg p-8 max-w-sm w-full text-white">
              <h2 className="text-xl mb-4">Confirm Refresh</h2>
              <p>This will deduct {refreshCost} credits from your balance. Do you want to continue?</p>
              <div className="mt-6 flex justify-end">
                <button
                  className="btn btn-ghost text-white mr-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary text-white"
                  onClick={handleRefresh}
                  disabled={credits < refreshCost}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
