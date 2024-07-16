import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    topic: null,
};

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState: initialState,
    reducers: {
        openVideoModal(state, action) {
            state.isOpen = true;
            state.topic = action.payload.topic;
        },
        closeVideoModal(state) {
            state.isOpen = false;
            state.topic = null;
        },
    },
});

export const { openVideoModal, closeVideoModal } = videoSlice.actions;
export default videoSlice.reducer;
