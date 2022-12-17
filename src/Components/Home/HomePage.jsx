/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { deleteUser, getAllArt, getAllUsers } from "../../redux/apiRequest";
import { loginSuccess } from "../../redux/authSlice";
import Card from "../ArtCollection/Card";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const arts = useSelector((state) => state.art.arts?.allArt);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, loginSuccess);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
      getAllArt(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);

  return (
    <>
      <main className="">
        <h2 className="my-8 text-[2rem] text-center font-semibold">
          Browse Art Collection
        </h2>
        <Card arts={arts} />
      </main>
    </>
  );
};

export default HomePage;
