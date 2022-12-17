import React from "react";
import { Link } from "react-router-dom";

const SubNavBarUser = () => {
  return (
    <nav className="flex items-center my-16 mx-6 justify-center">
      <div className="flex items-center">
        <ul className="flex flex-row gap-10 ml-auto text-16 font-semibold">
          <li className="nav-item bg-slate-800 text-white hover:bg-slate-400 hover:text-black">
            <Link to="/addBooking" className="">
                Booking Artist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SubNavBarUser;
