import React, { useState } from 'react';
import DashboardContainer from '../DashboardContainer';

export default function TopicWise() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Topic');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const TopicBtn = (
    <select className="flex items-center justify-center bg-slate-600 rounded-full shadow-md text-white focus:outline-none px-3 text-sm" onChange={(e) => handleOptionClick(e.target.value)}>
        <option value="" disabled selected>Select Topic</option>
        {['Option 1', 'Option 2', 'Option 3'].map(v => (
            <option value={v}>{v}</option>
        ))}
    </select>
  )

  return (
    <DashboardContainer title="Topic Wise" rightBtn={TopicBtn}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fuga, eveniet officiis architecto qui ipsum excepturi rerum deleniti dolores maiores perferendis earum quaerat molestiae. Ab maxime veniam inventore sunt laborum.
    </DashboardContainer>

  );
}
