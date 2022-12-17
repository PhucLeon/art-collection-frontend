import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addArt } from "../../redux/apiRequest";
import { addArtSuccess } from "../../redux/artSlice";
import { createAxios } from "../../createInstance";

const AddArt = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const id = user?._id;
  const accessToken = user?.accessToken;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, addArtSuccess);

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      user: id,
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Required!"),
      title: Yup.string().required("Required!"),
      description: Yup.string().required("Required!"),
    }),
    onSubmit: () => {
      handleAddArt();
    },
  });

  const handleAddArt = () => {
    const newArt = {
      image: formik.values.image,
      title: formik.values.title,
      description: formik.values.description,
      user: id,
    };

    addArt(newArt, accessToken, dispatch, navigate, axiosJWT);
  };

  return (
    <>
      <section className="mt-10">
        <h2 className="text-[1.5rem] text-center font-semibold">
          Add Art to Your Collection ^^
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

          <div className="flex flex-col my-4 gap-3 items-center">
            <label className="font-semibold">Image Link</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2 w-[75%]"
            />

            {formik.errors.image && (
              <p className="self-center text-red-500">{formik.errors.image}</p>
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
    </>
  );
};

export default AddArt;
