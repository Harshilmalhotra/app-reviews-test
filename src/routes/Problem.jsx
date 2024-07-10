import React from 'react';

function Problem() {
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 p-4">
      <div className="card bg-base-100 shadow-xl w-full overflow-hidden rounded-lg" key="large-card" style={{ width: '628.57px', height: '555px' }}>
        <figure className="flex justify-center items-center h-full w-full">
          <img
            src='graph.png'
            alt="graph"
            className="object-cover w-full h-full"
          />
        </figure>
      </div>
      <div className="flex flex-col gap-4">
        <div className="card bg-base-100 w-full shadow-xl overflow-hidden rounded-lg" key="small-card-1" style={{ width: '333.33px', height: '250px', marginBottom: '40px' }}>
          <figure className="flex justify-center items-center h-full w-full">
            <img
              src="graph2.png"
              alt="Graph 2"
              className="object-cover w-full h-full"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-full shadow-xl overflow-hidden rounded-lg" key="small-card-2" style={{ width: '333.33px', height: '250px' }}>
          <figure className="flex justify-center items-center h-full w-full">
            <img
              src="graph 3.png"
              alt="Graph 3"
              className="object-cover w-full h-full"
            />
          </figure>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl w-full overflow-hidden rounded-lg" key="thin-card" style={{ width: '226.8px', height: '550px' }}>
        <figure className="flex justify-center items-center h-full w-full">
          <img
            src="analysis.png"
            alt="analysis"
            className="object-cover w-full h-full"
          />
        </figure>
      </div>
    </div>
  );
}

export default Problem;
