import React from 'react'
import HeaderUV from './HeaderUV'

// assets and components
import tea_pic from "../assets/imgs/Logo-BBD.png";
import trinh_duoc_vien from '../assets/imgs/uv-ct-duoc/image 6.png'
import marketing_duoc from '../assets/imgs//uv-ct-duoc/image 11.png'
import medical from '../assets/imgs/uv-ct-duoc/image 11.png'
import training from '../assets/imgs/uv-ct-duoc/image 12.png'

const UV_CTDuoc = () => {
  return (
    <div>
        <HeaderUV />
        <div className="mt-10 ml-48">
            <h1 className="text-2xl">
              Bạn đã lựa chọn lĩnh vực{" "}
              <span className="font-bold">Công ty Dược & Thiết bị Y tế</span>{" "}
            </h1>
        </div>
        {/* LOGO of TOPICS */}
        <div className="mt-5 flex flex-wrap items-center justify-center">
          <div className="mr-6 relative">
            <input
              type="checkbox"
              className="absolute z-10 w-5 h-5 mt-4 ml-4"
            />
            <img
              src={trinh_duoc_vien}
              alt=""
              className="relative"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="mx-6 relative">
            <input
              type="checkbox"
              className="absolute z-10 w-5 h-5 mt-4 ml-4"
            />
            <img
              src={marketing_duoc}
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="mx-6 relative">
            <input
              type="checkbox"
              className="absolute z-10 w-5 h-5 mt-4 ml-4"
            />
            <img
              src={medical}
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="ml-6 relative">
            <input
              type="checkbox"
              className="absolute z-10 w-5 h-5 mt-4 ml-4"
            />
            <img
              src={training}
              style={{ height: "250px", width: "250px" }}
            />
          </div>
        </div>
    </div>
  )
}

export default UV_CTDuoc