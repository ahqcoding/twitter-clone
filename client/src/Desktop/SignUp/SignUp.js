import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { authActions } from "../../_actions/auth.actions";
import Dialog from "../../Component/Dialog";

const SingupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short!")
    .max(16, "Too Long!")
    .required("required"),
  email: Yup.string().email().required("required"),
  password: Yup.string().min(8, "Minimum length is 8").required("required"),
});

export default function SignUp() {
  let state = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  let showDialog = state.failed || state.registering || state.registering;
  console.log(state);
  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center">
      {showDialog && (
        <Dialog>
          {state.failed ? (
            <p>something went wrong, please try again</p>
          ) : state.registering ? (
            <p>loading</p>
          ) : (
            state.registered && <p>Success, you can signin now.</p>
          )}
          <button className="bg-blue hover:bg-darkblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            confirm
          </button>
        </Dialog>
      )}

      <h1 className="text-2xl mb-4">Sign Up</h1>
      <div className="w-full max-w-xs border-t">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={SingupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            dispatch(
              authActions.signup(values, () => {
                console.log("success");
              })
            );
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
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <span className="text-red-600 text-sm">
                  {errors.username && touched.username && errors.username}
                </span>
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
                <span className="text-red-600 text-sm">
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
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="******************"
                />

                <span className="text-red-600 text-sm">
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
                  to="/signin"
                  className="inline-block align-baseline font-bold text-sm
                  text-blue-500 hover:text-blue-800"
                >
                  Sign In
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
