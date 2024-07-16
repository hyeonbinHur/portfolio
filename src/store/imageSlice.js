import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    topic: null,
};

const imageSlice = createSlice({
    name: 'imageSlice',
    initialState: initialState,
    reducers: {
        openImageModal(state, action) {
            state.isOpen = true;
            state.topic = action.payload.topic;
        },
        closeImageModal(state) {
            state.isOpen = false;
            state.topic = null;
        },
    },
});

export const { openImageModal, closeImageModal } = imageSlice.actions;
export default imageSlice.reducer;
