import React from "react";
import { Link } from "react-router-dom";

// assets and components
import tea_pic from "../assets/imgs/Logo-BBD.png";
import nghien_cuu_va_phat_trien_pic from '../assets/imgs/nghien-cuu-va-phat-trien.png';
import standard_pic from '../assets/imgs/standard.png'
import q_and_a_pic from '../assets/imgs/q-and-a.png'
import viet_kiem_nghiem_pic from '../assets/imgs/viec-kiem-nghiem.png'

const UV = () => {
  return (
    <>
      <div className="mt-20">
        <div className="flex justify-center items-center">
          <img
            className="mr-2"
            src={tea_pic}
            alt="Tea"
            height={180}
            width={150}
          />
          <input
            style={{ width: "987px", height: "145px" }}
            type="text"
            placeholder="CAREER DATING"
            id="career-dating"
          />
        </div>
        {/* Options */}
        <div className="mt-5 ml-48 justify-center">
          <Link
            to={"/your-profile"}
            className="mx-2 drop-shadow-md shadow-md rounded-full bg-white-500 px-2 py-2"
          >
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            <span className="ml-3">Profile cá nhân</span>
          </Link>
          <Link
            to={"/consulting-list"}
            className="mx-2 drop-shadow-md shadow-md rounded-full bg-white-500 px-2 py-2"
          >
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            <span className="ml-3">Danh sách Tư Vấn Viên</span>
          </Link>
          <Link
            to={"/your-profile"}
            className="mx-2 drop-shadow-md shadow-md rounded-full bg-white-500 px-2 py-2"
          >
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            <span className="ml-3">Appointment made</span>
          </Link>
          <div className="mt-10">
            <h1 className="text-2xl">
              Bạn đã lựa chọn lĩnh vực{" "}
              <span className="font-bold">Sản xuất và Kiểm nghiệm</span>{" "}
            </h1>
          </div>
        </div>
        {/* LOGO of TOPICS */}
        <div className="mt-5 flex flex-wrap items-center justify-center">
            <div className="mr-6">
                <img src={nghien_cuu_va_phat_trien_pic} style={{height: "250px", width: "250px"}}/>
            </div>
            <div className="mx-6">
                <img src={standard_pic} style={{height: "250px", width: "250px"}}/>
            </div>
            <div className="mx-6">
                <img src={q_and_a_pic} style={{height: "250px", width: "250px"}}/>
            </div>
            <div className="ml-6">
                <img src={viet_kiem_nghiem_pic} style={{height: "250px", width: "250px"}}/>
            </div>
        </div>  
      </div>
    </>
  );
};

export default UV;
