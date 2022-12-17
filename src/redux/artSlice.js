import { createSlice } from "@reduxjs/toolkit";

const artSlice = createSlice({
  name: "art",
  initialState: {
    arts: {
      allArt: null,
      isFetching: false,
      error: false,
    },
    msg: "",
    addArt: {
      isFetching: false,
      error: false,
      success: false,
    },
    getAnArt: {
      anArt: null,
      isFetching: false,
      error: false,
    },

    updateArt: {
      isFetching: false,
      error: false,
      success: false,
    },

    deleteArt: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    getArtCollectionStart: (state) => {
      state.arts.isFetching = true;
    },

    getArtCollectionSuccess: (state, action) => {
      state.arts.allArt = action.payload;
      state.arts.isFetching = false;
      state.arts.error = false;
    },

    getArtCollectionFailed: (state) => {
      state.arts.error = true;
      state.msg = "Fail, please contact to 'Con Dev bất ổn'";
    },

    addArtStart: (state) => {
      state.addArt.isFetching = true;
    },

    addArtSuccess: (state, action) => {
      state.addArt.success = true;
      state.addArt.error = false;
    },
    addArtFailed: (state) => {
      state.addArt.isFetching = false;
      state.addArt.error = true;
    },

    getAnArtStart: (state) => {
      state.getAnArt.isFetching = true;
    },

    getAnArtSuccess: (state, action) => {
      state.getAnArt.anArt = action.payload;
      state.getAnArt.error = false;
    },

    getAnArtFailed: (state) => {
      state.getAnArt.error = true;
    },

    updateArtStart: (state) => {
      state.updateArt.isFetching = true;
    },

    updateArtSuccess: (state, action) => {
      state.updateArt.error = false;
      state.updateArt.success = true;
    },

    updateArtFailed: (state) => {
      state.updateArt.error = true;
    },

    deleteArtStart: (state) => {
      state.deleteArt.isFetching = true;
    },

    deleteArtSuccess: (state, action) => {
      state.deleteArt.success = true;
      state.deleteArt.error = false;
    },

    deleteArtFailed: (state) => {
      state.deleteArt.error = true;
    },
  },
});

export const {
  getArtCollectionStart,
  getArtCollectionSuccess,
  getArtCollectionFailed,
  addArtStart,
  addArtSuccess,
  addArtFailed,

  getAnArtStart,
  getAnArtSuccess,
  getAnArtFailed,

  updateArtStart,
  updateArtSuccess,
  updateArtFailed,

  deleteArtStart,
  deleteArtSuccess,
  deleteArtFailed,
} = artSlice.actions;

export default artSlice.reducer;
