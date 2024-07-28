// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './dropdownSlice';

const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});

export default store;
