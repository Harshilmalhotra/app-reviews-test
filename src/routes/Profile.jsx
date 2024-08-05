import React, { useEffect } from 'react';
import SideNav from '../components/SideNav/SideNav';

export default function Profile() {

  useEffect(() => {
      document.title = 'Profile | App Reviews';
  }, []);

  return (
    <div className="flex bg-slate-700"> {/* left right division */}
      <SideNav active="Profile"/>

      <div className="">
        
      </div>
    </div>
  );
}
