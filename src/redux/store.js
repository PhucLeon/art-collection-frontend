import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import artReducer from "./artSlice";
import bookingReducer from "./bookingSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    art: artReducer,
    booking: bookingReducer,
  },
});
