import {configureStore} from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
 const store = configureStore({
    reducer: {
        newState : dataSlice
    }
});
export default store;