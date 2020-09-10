import React from "react";
import { Formik } from "formik";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../_actions/auth.actions";

export default function SignIn() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">Sign In</h1>
      <div className="w-full max-w-xs border-t">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "password length should be larger than 6";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("test");
            if (values.email && values.password) {
              const { from } = location.state || { from: { pathname: "/" } };
              console.log("test");
              dispatch(
                authActions.signin(values, () => {
                  history.push(from);
                })
              );
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="text-red-600 font-sm">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="******************"
                />

                <span className="text-red-600 font-sm">
                  {errors.password && touched.password && errors.password}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue hover:bg-darkblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <Link
                  to="/signup"
                  className="inline-block align-baseline font-bold text-sm
                  text-blue-500 hover:text-blue-800"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
