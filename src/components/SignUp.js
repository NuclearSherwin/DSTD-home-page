import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/imgs/login/logo.png'

const SignUp = () => {
  return (
    <div
      className="mt-20 bg-cover bg-no-repeat flex justify-center"
      style={{ backgroundImage: "url(/img/sign_up/background-signup.png)" }}
    >
      <div className="w-screen h-max flex items-center justify-center">
        <div style={{ width: "1088px" }} className="">
          <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Logo */}
            <div>
              <img className='mr-auto ml-auto'
                src={Logo}
                style={{ width: "256px", height: "157.96px" }}
                alt="logo"
              />
              <h2 className="text-center font-bold my-5 text-2xl">ĐĂNG KÝ</h2>
              {/* separator */}
            </div>
            <div class="mb-4 mt-8">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Tên đăng nhập *"
              />
            </div>
            <div className="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Mật khẩu *"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Họ & Tên"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Giới tính"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Trường"
              />
            </div>
            <div class="mb-4 mt-4 flex">
              <input
                className="shadow appearance-none border rounded-lg mr-2 w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Khóa"
              />
              <input
                className="shadow appearance-none border rounded-lg ml-2 w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Lớp"
              />
            </div>
            <div class="mb-4 mt-4 flex">
              <input
                className="shadow appearance-none border rounded-lg mr-2 w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="MSSV"
              />
              <input
                className="shadow appearance-none border rounded-lg ml-2 w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Thẻ sinh viên * Thêm hình ảnh (chụp rõ các góc của thẻ)  "
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Số điện thoại *"
              />
            </div>
            <div class="mb-4 mt-4">
              <i class="absolute p-5 fa-brands fa-facebook"></i>
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=""
              />
            </div>
            <div class="mb-4 mt-4">
              <i class="absolute p-5 fa-brands fa-linkedin"></i>
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=""
              />
            </div>
            <div class="mb-4 mt-4">
            <i class="absolute p-5 fa-brands fa-instagram"></i>
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=""
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Vài điều về bản thân"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Châm ngôn yêu thích"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Kỹ năng (Năng lực bản thân)"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Kinh nghiệm làm việc, thành tích(nếu có)"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Ưu điểm"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Khuyết điểm"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Đinh hướng nghê nghiệp quan tâm"
              />
            </div>
            <div class="mb-4 mt-4">
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Mong muốn nghề nghiệp trong tương lai"
              />
            </div>
            <div className='flex items-center'>
              <input className='ml-2 mr-4' type="checkbox" checked="checked" />
              <p>Tôi đồng ý với <i className='italic text-green-500 font-bold text-md'>Quy định và Chính sách Bảo mật Người dùng</i> </p>
            </div>
            
            {/* Options */}
            <div className="flex justify-between mt-6 mb-6 px-4">
              {/* <a
                className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
                href="#"
              >
                Quên mật khẩu
              </a> */}
              <span>
                {/* <Link to={"/signup"}
                  className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
                  href="#"
                >
                  Chưa có tài khoản,
                </Link>
                <Link to={"/signup"}
                  className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
                  href="#"
                >
                  ĐĂNG KÝ Tại đây
                </Link> */}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-600 hover:bg-green-500 text-white font-bold 
                py-4 px-48 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                ĐĂNG KÝ
              </button>
            </div>
            
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp