import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name: "spellCheck",
    initialState : {
        spellChecker : false,
        title: ""
    },
    reducers : {

       spellCheck: (state,action) => {
        state.spellChecker = action.payload;
       },
       addTitle : (state,action) => {
        state.title = action.payload;
       }
    }

});

export default dataSlice.reducer;
export const {spellCheck,addTitle} = dataSlice.actions;