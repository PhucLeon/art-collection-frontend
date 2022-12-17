import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { updateBookingSuccess } from "../../redux/bookingSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
import { updateAnBooking } from "../../redux/apiRequest";

const UpdateBooking = () => {
  const { bookingId } = useParams();

  const bookings = useSelector((state) => state.booking.bookings?.allBookings);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);
  const accessToken = user?.accessToken;

  let axiosJWT = createAxios(user, dispatch, updateBookingSuccess);

  // Find Single Booking
  const booking = bookings?.find((booking) => booking._id === bookingId);

  const formik = useFormik({
    initialValues: {
      customerName: booking.customerName,
      customerRequirement: booking.customerRequirement,
      customerGmail: booking.customerGmail,
      customerPhone: booking.customerPhone,
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required("Required!"),
      customerRequirement: Yup.string().required("Required!"),
      customerGmail: Yup.string()
        .required("Required!")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address!"
        ),
      customerPhone: Yup.string()
        .required("Required")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          "Please enter a valid phone number!, Ex: 0988888888"
        ),
    }),
    onSubmit: () => {
      handleUpdateBooking();
    },
  });

  const handleUpdateBooking = () => {
    const booking = {
      customerName: formik.values.customerName,
      customerGmail: formik.values.customerGmail,
      customerPhone: formik.values.customerPhone,
      customerRequirement: formik.values.customerRequirement,
    };

    updateAnBooking(
      booking,
      bookingId,
      accessToken,
      dispatch,
      navigate,
      axiosJWT
    );
  };

  return (
    <>
      <section className="mt-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[2rem] font-semibold">Art Collection</h2>
          <h2 className="text-2xl font-semibold">
            Update Your Customer Information
          </h2>

          <form className="mt-4" action="" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-2 gap-3 items-baseline">
              <label className="font-semibold">Your Name</label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formik.values.customerName}
                onChange={formik.handleChange}
                className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
                size="50"
              />

              {formik.errors.customerName && (
                <p className="self-center text-red-500">
                  {formik.errors.customerName}
                </p>
              )}
            </div>

            <div className="flex flex-col my-2 gap-3 items-baseline">
              <label className="font-semibold">Your Gmail</label>
              <input
                type="text"
                id="customerGmail"
                name="customerGmail"
                value={formik.values.customerGmail}
                onChange={formik.handleChange}
                className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
                size="50"
              />

              {formik.errors.customerGmail && (
                <p className="self-center text-red-500">
                  {formik.errors.customerGmail}
                </p>
              )}
            </div>

            <div className="flex flex-col my-2 gap-3 items-baseline">
              <label className="font-semibold">Your Phone</label>
              <input
                type="text"
                id="customerPhone"
                name="customerPhone"
                value={formik.values.customerPhone}
                onChange={formik.handleChange}
                className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
                size="50"
              />

              {formik.errors.customerPhone && (
                <p className="self-center text-red-500">
                  {formik.errors.customerPhone}
                </p>
              )}
            </div>

            <div className="flex flex-col my-6 gap-3 items-center">
              <label className="font-semibold">
                Your Requirement To Drawing
              </label>

              <textarea
                name="customerRequirement"
                id="customerRequirement"
                cols="50"
                rows="10"
                className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2 w-[75%]"
                value={formik.values.customerRequirement}
                onChange={formik.handleChange}
              ></textarea>

              {formik.errors.customerRequirement && (
                <p className="self-center text-red-500">
                  {formik.errors.customerRequirement}
                </p>
              )}
            </div>

            <button
              className="block m-auto my-8 px-3 w-[75%] h-8 bg-gray-700 text-white font-semibold rounded-2xl hover:bg-gray-500 hover:text-black transition-all duration-200 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100 dark:hover:text-gray-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateBooking;
