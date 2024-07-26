import React from 'react';
import Sidebar from '../components/Sidebar';
import Dropdown from '../components/Dropdown';
import TopicWise from '../components/Overview/TopicWise';
import TrueRating from '../components/Overview/TrueRating';
import Rating from '../components/Overview/Rating';

function Overview() {
  return (
    <div className="flex bg-root-2"> {/* left right division */}
      <Sidebar />

      <div className="flex flex-col m-4 ml-8">
        <Dropdown />

        <div className="flex flex-row gap-8 h-[300px] mt-4"> {/* dropdown division */}

          <div className="flex flex-col gap-8 mt-5 h-[280px]">
            {/* rating will come here */}
            <Rating />
            <TrueRating />

          </div>
          <div className="">
            <TopicWise />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;