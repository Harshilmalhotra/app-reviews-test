import React, { useState } from 'react';
export default function VersionWise() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Version');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  return (
    <div className="flex flex-col items-center p-5 h-[275px] w-[500px] bg-root-1 rounded-[20px] gap-5 ">

      <div className="flex flex-row justify-between items-center w-[500px] px-5 ">
        <h1 className='text-xl font-semibold text-white'>Topic wise</h1>



              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="px-4 py-1 bg-slate-700 text-white hover:bg-root-1 hover:border-slate-700 border-2 border-root-1 rounded-[20px]   focus:outline-none"
                >
                  {selectedOption}
                </button>
                {isOpen && (
                  <ul className="absolute z-10 w-full mt-2 bg-white border rounded shadow-lg">
                    {['v1', 'v2', 'v3'].map((option) => (
                      <li
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>


      </div>


      <div className=''>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fuga, eveniet officiis architecto qui ipsum excepturi rerum deleniti dolores maiores perferendis earum quaerat molestiae. Ab maxime veniam inventore sunt laborum.
      </div>

    </div>

  );
}
