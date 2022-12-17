import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: {
      allBookings: null,
      isFetching: false,
      error: false,
    },
    addBooking: {
      isFetching: false,
      error: false,
      success: false,
    },
    updateBooking: {
      isFetching: false,
      error: false,
      success: false,
    },

    deleteBooking: {
      isFetching: false,
      error: false,
      success: false,
    },

    msg: "",
  },

  reducers: {
    getAllBookingStart: (state) => {
      state.bookings.isFetching = true;
    },

    getAllBookingSuccess: (state, action) => {
      state.bookings.allBookings = action.payload;
      state.bookings.isFetching = false;
      state.bookings.error = false;
    },

    getAllBookingFailed: (state) => {
      state.bookings.error = true;
      state.msg = "Fail, please contact to 'Con Dev bất ổn'";
    },

    addBookingStart: (state) => {
      state.addBooking.isFetching = true;
    },

    addBookingSuccess: (state, action) => {
      state.addBooking.success = true;
      state.addBooking.error = false;
    },
    addBookingFailed: (state) => {
      state.addBooking.isFetching = false;
      state.addBooking.error = true;
    },

    updateBookingStart: (state) => {
      state.updateBooking.isFetching = true;
    },

    updateBookingSuccess: (state, action) => {
      state.updateBooking.error = false;
      state.updateBooking.success = true;
    },

    updateBookingFailed: (state) => {
      state.updateBooking.error = true;
    },

    deleteBookingStart: (state) => {
      state.deleteBooking.isFetching = true;
    },

    deleteBookingSuccess: (state, action) => {
      state.deleteBooking.success = true;
      state.deleteBooking.error = false;
    },

    deleteBookingFailed: (state) => {
      state.deleteBooking.error = true;
    },
  },
});

export const {
  addBookingStart,
  addBookingSuccess,
  addBookingFailed,
  getAllBookingStart,
  getAllBookingSuccess,
  getAllBookingFailed,
  updateBookingStart,
  updateBookingSuccess,
  updateBookingFailed,
  deleteBookingStart,
  deleteBookingSuccess,
  deleteBookingFailed,
} = bookingSlice.actions;

export default bookingSlice.reducer;
