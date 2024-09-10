// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
// Import your slices here
const store = configureStore({
    reducer:{
        init:() => {
            
        }
    }
});


export default store;

