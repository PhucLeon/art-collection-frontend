import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/apiRequest";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      gmail: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required!")
        .min(4, "Username must be 4 character or more!"),
      gmail: Yup.string()
        .required("Required!")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address!"
        ),
      password: Yup.string()
        .required("Required!")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          "Please enter a valid password address!, for ex: Testing193!"
        ),
      confirmedPassword: Yup.string()
        .required("Required!")
        .oneOf([Yup.ref("password"), null], "Password must match!"),
    }),
    onSubmit: () => {
      handleRegister();
    },
  });

  const handleRegister = (e) => {
    const newUser = {
      gmail: formik.values.gmail,
      username: formik.values.username,
      password: formik.values.password,
    };

    registerUser(newUser, dispatch, navigate);
  };

  return (
    <>
      <section className="mt-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[2rem] font-semibold">Art Collection</h2>
          <h2 className="text-2xl font-semibold">Register</h2>

          <form className="mt-4 w-[50%]" action="" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-2 gap-3 items-baseline">
              <label>Gmail</label>
              <input
                type="text"
                id="gmail"
                name="gmail"
                value={formik.values.gmail}
                onChange={formik.handleChange}
                className="w-[100%] dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
              />

              {formik.errors.gmail && (
                <p className="self-center text-red-500">
                  {formik.errors.gmail}
                </p>
              )}
            </div>

            <div className="flex flex-col my-2 gap-3 items-baseline">
              <label>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="w-[100%] dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
              />

              {formik.errors.username && (
                <p className="self-center text-red-500">
                  {formik.errors.username}
                </p>
              )}
            </div>

            <div className="flex flex-col my-2 gap-3 items-baseline">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-[100%] dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
              />

              {formik.errors.password && (
                <p className="self-center text-red-500">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="flex flex-col my-2 gap-3 items-baseline">
              <label> Confirmed Password</label>
              <input
                type="password"
                id="confirmedPassword"
                name="confirmedPassword"
                value={formik.values.confirmedPassword}
                onChange={formik.handleChange}
                className="w-[100%] dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
              />

              {formik.errors.confirmedPassword && (
                <p className="self-center text-red-500">
                  {formik.errors.confirmedPassword}
                </p>
              )}
            </div>

            <button
              className="my-3 px-3 w-[100%] h-8 bg-gray-700 text-white font-semibold rounded-2xl hover:bg-gray-500 hover:text-black transition-all duration-200 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100 dark:hover:text-gray-600"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="">You've already had an account?</div>
          <Link className="underline text-blue-500" to="/login">
            Login here!
          </Link>
        </div>
      </section>

      {/* <section className="register-container">
        <div className="register-title"> Sign up </div>
        <form onSubmit={handleRegister}>
          <label>EMAIL</label>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setGmail(e.target.value)}
          />
          <label>USERNAME</label>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit"> Create account </button>
        </form>
      </section> */}
    </>
  );
};

export default Register;
