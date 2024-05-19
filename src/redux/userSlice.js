import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    signIn: (state, action) => {
      return {user:action.payload}
    },
  },
});

export const { signIn } = userSlice.actions;

export default userSlice.reducer;
