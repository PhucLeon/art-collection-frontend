import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSucess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
import axios from "axios";
import {
  deleteUserFail,
  deleteUserStart,
  deleteUserSuccess,
  getUserFail,
  getUserStart,
  getUserSuccess,
} from "./userSlice";
import { addArtFailed, addArtStart, addArtSuccess, deleteArtStart, deleteArtSuccess, getAnArtFailed, getAnArtStart, getAnArtSuccess, getArtCollectionStart, getArtCollectionSuccess, updateArtFailed, updateArtStart, updateArtSuccess } from "./artSlice";
import { addBookingFailed, addBookingStart, addBookingSuccess, deleteBookingFailed, deleteBookingStart, deleteBookingSuccess, getAllBookingFailed, getAllBookingStart, getAllBookingSuccess, updateBookingFailed, updateBookingStart, updateBookingSuccess } from "./bookingSlice";


const URL = "https://art-collection-api.onrender.com";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${URL}/v1/auth/login`, user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post(`${URL}/v1/auth/register`, user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed());
  }
};

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
  dispatch(getUserStart());
  try {
    const res = await axiosJWT.get(`${URL}/v1/user`, {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    });

    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFail());
  }
};

export const deleteUser = async (accessToken, dispatch, id, axiosJWT) => {
  dispatch(deleteUserStart());
  try {
    const res = await axiosJWT.delete(`${URL}/v1/user/` + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteUserSuccess(res.data));
  } catch (err) {
    dispatch(deleteUserFail(err.response.data));
  }
};

export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logoutStart());
  try {
    await axiosJWT.post(`${URL}/v1/auth/logout`, id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logoutSucess());
    navigate("/login");
  } catch (err) {
    dispatch(loginFailed());
  }
};


// For Art
export const getAllArt = async(accessToken, dispatch, axiosJWT) => {
  dispatch(getArtCollectionStart());
  try {
    const res = await axiosJWT.get(`${URL}/v1/art/`, {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    });

    dispatch(getArtCollectionSuccess(res.data));
  } catch (err) {
    dispatch(getArtCollectionSuccess());
  }
}

export const addArt = async(art, accessToken, dispatch, navigate, axiosJWT) => {
  dispatch(addArtStart());
  try {
      await axiosJWT.post(`${URL}/v1/art/`, art, {
        headers: {
          token: `Bearer ${accessToken}`
        },
      })
      dispatch(addArtSuccess());
      navigate("/");
  } catch (err) {
    dispatch(addArtFailed());
  }
}

export const getAnArt = async(id, accessToken, dispatch, axiosJWT) =>{
  dispatch(getAnArtStart());
  try {
    const res = await axiosJWT.get(`${URL}/v1/art/` + id, {
      headers: {
        token: `Bearer ${accessToken}`
      }
    });

    dispatch(getAnArtSuccess(res.data));
  } catch (err) {
    dispatch(getAnArtFailed());
  }
}


export const updateAnArt = async(art, id, accessToken, dispatch, navigate, axiosJWT) => {
  dispatch(updateArtStart());
  
  try {
    const res = await axiosJWT.put(`${URL}/v1/art/` + id, art, {
      headers: {
        token: `Bearer ${accessToken}`
      }
    })
    dispatch(updateArtSuccess(res.data));
    navigate(`/detailArt/${id}`);
  } catch (err) {
    dispatch(updateArtFailed());
  }
}

export const deleteAnArt = async(id, accessToken, dispatch, navigate, axiosJWT) => {
  dispatch(deleteArtStart());
  try {
    await axiosJWT.delete(`${URL}/v1/art/` + id, {
      headers: {
        token: `Bearer ${accessToken}`
      }
    });

    dispatch(deleteArtSuccess());
    navigate("/");
  } catch (err) {
    dispatch(deleteArtSuccess());
  }
}


// For Booking
export const getAllBooking = async(accessToken, dispatch, axiosJWT) => {
  dispatch(getAllBookingStart());
  try {
    const res = await axiosJWT.get(`${URL}/v1/booking/`, {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    });

    dispatch(getAllBookingSuccess(res.data));
  } catch (err) {
    dispatch(getAllBookingFailed());
  }
}

export const addBooking = async(booking, accessToken, dispatch, navigate, axiosJWT) => {
  dispatch(addBookingStart());
  try {
      await axiosJWT.post(`${URL}/v1/booking/`, booking, {
        headers: {
          token: `Bearer ${accessToken}`
        },
      })
      dispatch(addBookingSuccess());
      navigate("/");
  } catch (err) {
    dispatch(addBookingFailed());
  }
}

export const updateAnBooking = async(booking, id, accessToken, dispatch, navigate, axiosJWT) => {
  dispatch(updateBookingStart());
  
  try {
    const res = await axiosJWT.put(`${URL}/v1/booking/` + id, booking, {
      headers: {
        token: `Bearer ${accessToken}`
      }
    })
    dispatch(updateBookingSuccess(res.data));
    navigate(`/viewAllBooking`);
  } catch (err) {
    dispatch(updateBookingFailed());
  }
}

export const deleteAnBooking = async(id, accessToken, dispatch, navigate, axiosJWT) => {
  dispatch(deleteBookingStart());
  try {
    await axiosJWT.delete(`${URL}/v1/booking/` + id, {
      headers: {
        token: `Bearer ${accessToken}`
      }
    });

    dispatch(deleteBookingSuccess());
    navigate("/viewAllBooking");
  } catch (err) {
    dispatch(deleteBookingFailed());
  }
}
