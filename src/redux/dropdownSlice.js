// src/redux/dropdownSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    selection: ''
  },
  reducers: {
    setSelection: (state, action) => {
      state.selection = action.payload;
    }
  }
});

export const { setSelection } = dropdownSlice.actions;
export default dropdownSlice.reducer;
