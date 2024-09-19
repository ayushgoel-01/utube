import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
    },
    reducers: {
        cacheResults: (state,action) =>{
            state = Object.assign(state,action.payload);
        },
        searchResults: (state,action) =>{
            state.searchedData = action.payload;
        }
    },
});

export const {cacheResults, searchResults} = searchSlice.actions;

export default searchSlice.reducer;