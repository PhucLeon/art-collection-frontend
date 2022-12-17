import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SubNavBar = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const admin = user?.admin;

  return (
    <>
      <nav className="flex items-center my-16 mx-6 justify-center">
        <div className="flex items-center">
          <ul className="flex flex-row gap-10 ml-auto text-16 font-semibold">
            <li className="nav-item bg-slate-800 text-white hover:bg-slate-400 hover:text-black">
              <Link to="/addArt" className="">
                Add Art
              </Link>
            </li>

            <li className="nav-item bg-slate-800 text-white hover:bg-slate-400 hover:text-black">
              <Link to="/viewAllBooking" className="">
                View Booking
              </Link>
            </li>

            <li className="nav-item bg-slate-800 text-white hover:bg-slate-400 hover:text-black">
              <Link to="/addBooking" className="">
                Add Booking
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SubNavBar;
