import { createSlice } from "@reduxjs/toolkit";

console.log({createSlice});

export const imageSlice = createSlice({
  name: "image",
    initialState:[], 
  reducers: {
    setImageList: (state, action) => {
        //   state.value+= action.payload;
        state.push(action.payload);
        console.log({...state},{...action})
    },
  },
});

export const { setImageList } = imageSlice.actions;

export default imageSlice.reducer;
