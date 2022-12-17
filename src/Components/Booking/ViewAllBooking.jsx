import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { getAllBookingSuccess } from "../../redux/bookingSlice";
import { useEffect } from "react";
import { getAllBooking } from "../../redux/apiRequest";

const ViewAllBooking = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const accessToken = user?.accessToken;

  const bookings = useSelector((state) => state.booking.bookings?.allBookings);

  const dispatch = useDispatch();

  let axiosJWT = createAxios(user, dispatch, getAllBookingSuccess);

  useEffect(() => {
    if (user?.accessToken) {
      getAllBooking(accessToken, dispatch, axiosJWT);
    }
  }, []);

  return (
    <section className="">
      <h2 className="my-8 text-[2rem] text-center font-semibold">
        Browse Booking - Họa nô tới đêy!
      </h2>

      <>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-200 dark:text-black">
                <th className="py-3 px-6" scope="col">
                  Customer Name:
                </th>
                <th className="py-3 px-6" scope="col">
                  Customer Gmail:
                </th>
                <th className="py-3 px-6" scope="col">
                  Customer Phone:
                </th>
                <th className="py-3 px-6" scope="col">
                  Customer Requirement:
                </th>
                <th className="py-3 px-6" scope="col">
                  Action:
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => {
                return (
                  <tr className="bg-white border-b dark:bg-slate-200 dark:border-gray-700 dark:text-black">
                    <td className="py-4 px-6">{booking.customerName}</td>
                    <td className="py-4 px-6">{booking.customerGmail}</td>
                    <td className="py-4 px-6">{booking.customerPhone}</td>
                    <td className="py-4 px-6">{booking.customerRequirement}</td>
                    <td className="py-4 px-6">
                      <Link to={`/updateBooking/${booking._id}`} className="">
                        <button className="m-1 w-[5rem] h-[2rem] bg-slate-800 text-white rounded-2xl hover:bg-slate-400 hover:text-black">
                          Update
                        </button>
                      </Link>

                      <Link to={`/deleteBooking/${booking._id}`} className="">
                        <button className="m-1 w-[5rem] h-[2rem] bg-slate-800 text-white rounded-2xl hover:bg-slate-400 hover:text-black">
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </section>
  );
};

export default ViewAllBooking;
