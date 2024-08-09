import React, { useEffect } from 'react';
import SideNav from '../components/SideNav/SideNav';
import Dropdown from '../components/Dropdown';
import TrueRating from '../components/Overview/TrueRating'; // Updated path
import TopicWise from '../components/Overview/TopicWise'; // Updated path
import VersionWise from '../components/Overview/VersionWise'; // Updated path
import Distractions from '../components/Overview/Distractions'; // Updated path

export default function Overview() {

  useEffect(() => {
    document.title = 'Overview | App Reviews';
  }, []);

  return (
    <div className="flex bg-slate-700"> {/* left right division */}
      <SideNav active="Overview" />

      <div className="flex flex-col flex-grow">
        <Dropdown />

        <div className="grid p-8 grid-rows-5 grid-cols-5 grid-flow-row gap-8 h-full">
          <div className="row-span-2 col-span-1">
            <TrueRating />
          </div>
          <div className="row-span-2 col-span-2">
            <TopicWise />
          </div>
          <div className="row-span-2 col-span-2">
            <VersionWise />
          </div>
          <div className="row-span-3 col-span-5">
            <Distractions />
          </div>

        </div>

      </div>
    </div>
  );
}