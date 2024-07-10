import React from 'react';
import Sidebar from '../components/Sidebar';
function Overview() {
  return (
    <div className='flex'>
      <Sidebar /> 
    
    <div className="flex flex-wrap justify-center items-center gap-4 p-4">
      <div className="flex flex-col gap-4">
        <div className="card bg-root-1 w-full shadow-xl" style={{ width: '400px', height: '297px', marginBottom: '0px' }}>
          <div className="card-body flex flex-col items-center justify-center">
            <h1 className='card-title text-6xl'><strong>4.9</strong></h1>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <p className="text-sm mt-2">On playstore</p>
          </div>
        </div>
        <div className="card bg-root-1 w-full shadow-xl" style={{ width: '400px', height: '297px', marginTop: '20px' }}>
          <div className="card-body flex justify-around items-center">
            <button className="btn bg-red-500 text-white">Remove</button>
            <button className="btn bg-green-500 text-white">Assort by value</button>
            <button className="btn bg-blue-500 text-white">Favourite Review</button>
          </div>
        </div>
      </div>
      <div className="card bg-root-1 shadow-xl w-full flex justify-center items-center" style={{ width: '800px', height: '608px' }}>
        <div className="w-full flex justify-center">
          <div className="w-full" style={{ maxWidth: '687px' }}>
            <div className="collapse bg-base-200 mb-4">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title text-xl font-medium">Topic wise</div>
              <div className="collapse-content">
                <p>- Functionality</p>
                <p>- Content and Data</p>
                <p>- Monetization</p>
              </div>
            </div>
            <div className="collapse bg-base-200 mb-4">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">Star wise</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">Time wise</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Overview;
