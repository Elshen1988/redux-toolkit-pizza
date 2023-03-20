import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../reducer/list.slice";


export const GlobalStore = configureStore({
    reducer: {
        list: listSlice
        
    }
    
})
