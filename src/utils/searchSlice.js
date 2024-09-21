import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        currentVideo: "",
    },
    reducers: {
        cacheResults: (state,action) =>{
            state = Object.assign(state,action.payload);
        },
        searchResults: (state,action) =>{
            state.searchedData = action.payload;
        },
        currentVideo: (state,action) =>{
            state.currentVideo = action.payload;
        }
    },
});

export const {cacheResults, searchResults, currentVideo} = searchSlice.actions;

export default searchSlice.reducer;