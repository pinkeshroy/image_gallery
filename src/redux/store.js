import { configureStore } from "@reduxjs/toolkit";
import imageReducer from './slice'
import  userReducer  from "./userSlice";
console.log({configureStore});
export default configureStore({
  reducer: {
    image: imageReducer,
    user:userReducer,
  },
});