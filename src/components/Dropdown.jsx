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
    <div className="pt-4" >
      <select
        value={selection}
        onChange={handleChange}
        className=" w-[400px]  rounded-3xl p-1  bg-root-1 text-xl font-semibold text-center"
      >
        
        <option value="Play Store">Play Store</option>
        <option value="App Store">App Store</option>
        <option value="Combined">Combined</option>
      </select>
  
    </div>
  );
};

export default Dropdown;
