import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    navigate("/");

    console.log(`Form Submitted`);
  };

  return (
    <>
      <section className="bg-[#f6f9fa] h-screen">
        <div className="flex flex-col items-center justify-center  mx-auto md:h-screen">
          <div className="w-full bg-white rounded-lg shadow-xl max-w-md  text-gray-700">
            <div>
              <h1 className="text-xl tracking-widest font-normal leading-tight md:text-2xl pl-6 pt-6">
                LOGIN
              </h1>
              <form
                id="loginForm"
                className="md:space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="pl-6 pr-6 pt-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-100 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your name..."
                    required=""
                  />
                </div>
                <div className="pl-6 pr-6 pt-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    EMAIL
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-100 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div className="pl-6 pr-6 pt-4">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    PASSWORD
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-100 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    minLength={4}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <p className="font-medium text-gray-600 hover:underline">
                    <Link to="/signup">FORGOT YOUR PASSWORD</Link>
                  </p>
                </div>
                <div className="bottonBtns flex w-full">
                  <button
                    type="button"
                    className="w-full text-grey-500 bg-[#e8e9ec] active:bg-gray-900 active:text-gray-200 font-medium text-sm px-5 py-2.5 text-center rounded-bl-lg"
                  >
                    Register
                  </button>
                  <button
                    type="submit"
                    className="w-full text-white bg-[#2c3b59] active:bg-blue-900 font-medium text-sm px-5 py-2.5 text-center rounded-br-lg"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
