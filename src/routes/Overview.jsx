import React from 'react';
import Sidebar from '../components/Sidebar';
import Dropdown from '../components/Dropdown';
import TrueRating from '../components/Overview/TrueRating'; // Updated path
import TopicWise from '../components/Overview/TopicWise'; // Updated path
import VersionWise from '../components/Overview/VersionWise'; // Updated path
import Distractions from '../components/Overview/Distractions'; // Updated path

function Overview() {

  



  return (
    <div className="flex bg-root-2"> {/* left right division */}
      <Sidebar />

      <div className="flex flex-col m-4 ml-8">
        <Dropdown />

        <div className="flex flex-col gap-8 h-[300px] mt-4"> {/* dropdown division */}

          <div className="flex flex-row gap-8 mt-0 h-[280px]">
            {/* rating will come here */}
            <TrueRating />
            <TopicWise />
            <VersionWise />           

          </div>
          <div className="">         
            <Distractions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
