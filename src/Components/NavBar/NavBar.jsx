import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { logOut } from "../../redux/apiRequest";
import { logoutSucess } from "../../redux/authSlice";
import useDarkMode from "../../useDarkMode";
import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import SubNavBar from "./SubNavBar";
import SubNavBarUser from "./SubNavBarUser";

const NavBar = (props) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const admin = user?.admin;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, logoutSucess);

  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken, axiosJWT);
  };

  const [openMenu, setOpenMenu] = useState(false);
  const { isMobile } = props;
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className="flex items-center mb-16 mx-6">
        <div className="flex items-center">
          <div className="text-[2rem] font-bold mr-2 cursor-pointer">
            <Link to="/" className="">
              Art Collection
            </Link>
          </div>
          {isDarkMode ? (
            <BsFillSunFill
              size={"24px"}
              color="#e9c46a"
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ) : (
            <FaMoon
              size={"24px"}
              color="#e9c46a"
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          )}
        </div>

        <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
          {openMenu && isMobile ? (
            <MdOutlineClose
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : !openMenu && isMobile ? (
            <HiOutlineMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : user ? (
            <>
              <li className="nav-item">
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                Hi, <span> {user.username} </span>{" "}
              </li>
              <li className="nav-item">
                <Link to="/logout" className="" onClick={handleLogout}>
                  Log out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="navbar-login">
                  {" "}
                  Login{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="navbar-register">
                  {" "}
                  Register
                </Link>
              </li>
            </>
          )}

          {openMenu && user ? (
            <div className="absolute bg-gray-100 rounded-md right-8 p-8 text-center text-black text-13 z-10">
              <li className="nav-item">
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                Hi, <span> {user.username} </span>{" "}
              </li>
              <li className="nav-item">
                <Link to="/logout" className="" onClick={handleLogout}>
                  Log out
                </Link>
              </li>
            </div>
          ) : openMenu && !user ? (
            <>
              <div className="absolute bg-gray-100 rounded-md right-8 p-8 text-center text-black text-13 z-10">
                <li className="nav-item">
                  <Link to="/" className="">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="navbar-login">
                    {" "}
                    Login{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="navbar-register">
                    {" "}
                    Register
                  </Link>
                </li>
              </div>
            </>
          ) : (
            <></>
          )}
        </ul>
      </nav>


      {admin && user ? (<SubNavBar />) : !admin && user ? (<SubNavBarUser />) : (<></>)}
    </>
  );
};

export default NavBar;
