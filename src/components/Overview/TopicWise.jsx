import React, { useState } from 'react';

export default function TopicWise() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8  w-[850px] bg-root-1 rounded-lg h-[600px]">
      <div
        className="bg-[#696875] text-white p-4 rounded-lg shadow-md w-full cursor-pointer z-30"
        onClick={() => toggleSection('topic')}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Topic wise</h2>
          <svg
            className={`w-6 h-6 transition-transform duration-1000 ${expandedSection === 'topic' ? 'transform rotate-180' : ''}`} // Increased duration to 1000ms
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {expandedSection === 'topic' && (
          <div className="mt-2">
            <ul className="list-disc list-inside">
              <li>Functionality</li>
              <li>Content and Data</li>
              <li>Monetization</li>
            </ul>
          </div>
        )}
      </div>

      <div
        className="bg-[#4F4D5E] text-white p-4 rounded-lg shadow-md w-full cursor-pointer -translate-y-5 z-20 pt-6"
        onClick={() => toggleSection('star')}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Star wise</h2>
          <svg
            className={`w-6 h-6 transition-transform duration-1000 ${expandedSection === 'star' ? 'transform rotate-180' : ''}`} // Increased duration to 1000ms
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {expandedSection === 'star' && (
          <div className="mt-2">
            <p>Content for Star wise...</p>
          </div>
        )}
      </div>

      <div
        className="bg-[#262244] text-white p-4 rounded-lg shadow-md w-full cursor-pointer -translate-y-10 z-0 pt-6"
        onClick={() => toggleSection('time')}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Time wise</h2>
          <svg
            className={`w-6 h-6 transition-transform duration-1000 ${expandedSection === 'time' ? 'transform rotate-180' : ''}`} // Increased duration to 1000ms
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {expandedSection === 'time' && (
          <div className="mt-2">
            <p>Content for Time wise...</p>
          </div>
        )}
      </div>
    </div>


  );
}