import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelection } from '../redux/dropdownSlice';

const Dropdown = () => {
  const dispatch = useDispatch();
  const selection = useSelector(state => state.dropdown.selection);

  const handleChange = (event) => {
    dispatch(setSelection(event.target.value));
  };

  return (
    <div className="w-full bg-[#273042] shadow-lg p-2 mb-6" >
      <select
        value={selection}
        onChange={handleChange}
        className="w-full px-6 py-2 bg-[#273042] text-white/80 focus:outline-none"
      >
        <option value="Play Store">Play Store</option>
        <option value="App Store">App Store</option>
        <option value="Combined">Combined</option>
      </select>

    </div>
  );
};

export default Dropdown;
