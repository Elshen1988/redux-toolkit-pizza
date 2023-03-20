import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        value: []
    },
    reducers: {
        addlist: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        dellister: (state, action) => {
            state.value = [action.payload]
        }
      
    }
})
export const { addlist,dellister } = listSlice.actions

export default listSlice.reducer