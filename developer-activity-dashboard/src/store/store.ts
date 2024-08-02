import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../store/themSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;
