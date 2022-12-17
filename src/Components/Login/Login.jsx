import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: () => {
      handleLogin();
    },
  });

  const handleLogin = () => {
    const user = {
      username: formik.values.username,
      password: formik.values.password,
    };

    loginUser(user, dispatch, navigate);
  };

  return (
    <>
      <section className="mt-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[2rem] font-semibold">Art Collection</h2>
          <h2 className="text-2xl font-semibold">Login</h2>

          <form className="mt-4" action="" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-2 gap-3 items-baseline">
              <label>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
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
                className="dark:text-black border-solid indent-3 rounded-2xl border-black border-2"
              />
              {formik.errors.password && (
                <p className="self-center text-red-500">
                  {formik.errors.password}
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

          <div className="">Don't have account yet?</div>
          <Link className="underline text-blue-500" to="/register">
            Register one here!
          </Link>
        </div>
      </section>

      {/* <section className="login-container">
        <div className="login-title"> Log in</div>
        <form onSubmit={handleLogin}>
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
          <button type="submit"> Continue </button>
        </form>
        <div className="login-register"> Don't have an account yet? </div>
        <Link className="login-register-link" to="/register">
          Register one for free{" "}
        </Link>
      </section> */}
    </>
  );
};

export default Login;
