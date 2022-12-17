import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteAnArt } from "../../redux/apiRequest";
import { deleteArtSuccess } from "../../redux/artSlice";
import { createAxios } from "../../createInstance";
import { useFormik } from "formik";

const DeleteArt = () => {
  const { artId } = useParams();
  const user = useSelector((state) => state.auth.login.currentUser);
  const admin = user?.admin;
  const accessToken = user?.accessToken;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, deleteArtSuccess);
  const handleDelete = () => {
    deleteAnArt(artId, accessToken, dispatch, navigate, axiosJWT);
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
        Are you sure that you want to delete this art from your collections?
      </h2>

      <form className="mt-4" action="" onSubmit={formik.handleSubmit}>
        <button
          className="block m-auto my-8 px-3 w-[75%] h-8 bg-gray-700 text-white font-semibold rounded-2xl hover:bg-gray-500 hover:text-black transition-all duration-200 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100 dark:hover:text-gray-600"
          type="submit"
        >
          Yes, I want
        </button>

        <Link to={`/detailArt/${artId}`}>
          <button className="block m-auto my-8 px-3 w-[75%] h-8 bg-gray-700 text-white font-semibold rounded-2xl hover:bg-gray-500 hover:text-black transition-all duration-200 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100 dark:hover:text-gray-600">
            No, I change my mind
          </button>
        </Link>
      </form>
    </section>
  );
};

export default DeleteArt;
