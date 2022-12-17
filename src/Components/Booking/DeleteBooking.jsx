import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { deleteBookingSuccess } from "../../redux/bookingSlice";
import { useFormik } from "formik";
import { deleteAnBooking } from "../../redux/apiRequest";

const DeleteBooking = () => {
  const { bookingId } = useParams();
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, deleteBookingSuccess);
  const handleDelete = () => {
    deleteAnBooking(bookingId, accessToken, dispatch, navigate, axiosJWT);
  };

  const formik = useFormik({
    initialValues: {},

    onSubmit: () => {
      handleDelete();
    },
  });

  return (
    <section className="mt-10">
      <h2 className="text-[1.5rem] text-center font-semibold">
        Are you sure that you want to delete this booking from your collections?
      </h2>
      <h2 className="text-[1.5rem] text-slate-500 text-center font-semibold">
        Họa nô đã chạy còm này xong, xóa đi thui nà !!!!
      </h2>

      <form className="mt-4" action="" onSubmit={formik.handleSubmit}>
        <button
          className="block m-auto my-8 px-3 w-[75%] h-8 bg-gray-700 text-white font-semibold rounded-2xl hover:bg-gray-500 hover:text-black transition-all duration-200 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100 dark:hover:text-gray-600"
          type="submit"
        >
          Yes, I want
        </button>

        <Link to={`/viewAllBooking`}>
          <button className="block m-auto my-8 px-3 w-[75%] h-8 bg-gray-700 text-white font-semibold rounded-2xl hover:bg-gray-500 hover:text-black transition-all duration-200 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100 dark:hover:text-gray-600">
            No, I change my mind
          </button>
        </Link>
      </form>
    </section>
  );
};

export default DeleteBooking;
