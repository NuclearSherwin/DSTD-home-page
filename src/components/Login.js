import React from "react";
import GoogleLogo from "../assets/imgs/login/google-logo.svg";
import FacebookLogo from "../assets/imgs/login/facebook-logo.svg";

const Login = () => {
  return (
    <div
      className="mt-16 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/img/login/background-login.png)" }}
    >
      <div className="w-screen h-screen flex items-center justify-center">
        <div style={{ width: "550px" }} className="">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Logo */}
            <div>
              <img
                src="/public/img/login/google-logo.svg"
                style={{ width: "256px", height: "157.96px" }}
                alt="logo"
              />
              <h2 className="text-center font-bold my-5 text-2xl">ĐĂNG NHẬP</h2>
              <div className="flex justify-between">
                <button className="flex items-center justify-around btn shadow-lg rounded-md px-2  py-4 bg-white">
                  <img
                    className="mr-2"
                    src={GoogleLogo}
                    width={28.69}
                    height={29.06}
                    alt="google"
                  />
                  <span className="ml-4 mr-2">Tiếp tục với Google</span>
                </button>
                <button className="flex items-center justify-around btn shadow-lg rounded-md px-2 py-4 bg-white">
                  <img
                    className="mr-2"
                    src={FacebookLogo}
                    width={28.69}
                    height={29.06}
                    alt="google"
                  />
                  <span className="ml-4 mr-2">Tiếp tục với Facebook</span>
                </button>
              </div>
              {/* separator */}
              <h1 className="mt-8 text-center border-solid border-1">
                --------------------------------Hoặc--------------------------------
              </h1>
            </div>
            <div class="mb-4 mt-8">
              {/* <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label> */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Tên đăng nhập"
              />
            </div>
            <div className="mb-6">
              {/* <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label> */}
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Mật khẩu"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            {/* Options */}
            <div className="flex justify-between mt-6 mb-6 px-4">
              <a
                className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
                href="#"
              >
                Quên mật khẩu
              </a>
              <span>
                <a
                  className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
                  href="#"
                >
                  Chưa có tài khoản,
                </a>
                <a
                  className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
                  href="#"
                >
                  ĐĂNG KÝ Tại đây
                </a>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-600 hover:bg-green-500 text-white font-bold 
                py-4 px-48 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                ĐĂNG NHẬP
              </button>
            </div>
            
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
