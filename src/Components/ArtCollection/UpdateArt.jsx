import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { updateArtSuccess } from "../../redux/artSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateAnArt } from "../../redux/apiRequest";

const UpdateArt = () => {
  const { artId } = useParams();
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, updateArtSuccess);

  const arts = useSelector((state) => state.art.arts?.allArt);

  const art = arts?.find((a) => a._id === artId);

  const formik = useFormik({
    initialValues: {
      title: art.title,
      description: art.description,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required!"),
      description: Yup.string().required("Required!"),
    }),
    onSubmit: () => {
      handleUpdateArt();
    },
  });

  const handleUpdateArt = () => {
    const newArt = {
      title: formik.values.title,
      description: formik.values.description,
    };

    updateAnArt(newArt, artId, accessToken, dispatch, navigate, axiosJWT);
  };

  return (
    <section className="mt-10">
      <h2 className="text-[1.5rem] text-center font-semibold">
        Update This Art
      </h2>

      <form className="mt-4" action="" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col my-4 gap-3 items-center">
          <label className="font-semibold">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2 w-[75%]"
          />

          {formik.errors.title && (
            <p className="self-center text-red-500">{formik.errors.title}</p>
          )}
        </div>

        <div className="flex flex-col my-6 gap-3 items-center">
          <label className="font-semibold">Description</label>

          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2 w-[75%]"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>

          {formik.errors.description && (
            <p className="self-center text-red-500">
              {formik.errors.description}
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
    </section>
  );
};

export default UpdateArt;
