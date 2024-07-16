import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './videoSlice';
import imageReducer from './imageSlice';

export const store = configureStore({
    reducer: {
        videoSlice: videoReducer,
        imageSlice: imageReducer,
    },
});
