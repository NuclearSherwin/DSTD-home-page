import React from "react";
import HeaderUV from "./HeaderUV";

import trinh_duoc_vien from "../assets/imgs/uv-ct-duoc/image 6.png";
import marketing_duoc from "../assets/imgs//uv-ct-duoc/image 11.png";
import medical from "../assets/imgs/uv-ct-duoc/image 11.png";
import training from "../assets/imgs/uv-ct-duoc/image 12.png";
import arrow_down from '../assets/imgs/uv-dating-pics/arrow-down-sign-to-navigate-svgrepo-com.svg'

const UVNghienCuu = () => {
  const customButton = {
    boxShadow: '0px 4px 4px 0px #00000040'
  }

  return (
    <div>
      <HeaderUV />
      <div className="mt-10 ml-48">
        <h1 className="text-2xl">
          Bạn đã lựa chọn lĩnh vực{" "}
          <span className="font-bold">Nghiên cứu và Giảng dạy</span>{" "}
        </h1>
      </div>
      {/* LOGO of TOPICS */}
      <div className="mt-5 flex flex-wrap items-center justify-around">
        <div className="mr-6 relative">
          <input type="checkbox" className="absolute z-10 w-5 h-5 mt-4 ml-4" />
          <img
            src={trinh_duoc_vien}
            alt=""
            className="relative"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div className="ml-6 relative">
          <input type="checkbox" className="absolute z-10 w-5 h-5 mt-4 ml-4" />
          <img src={training} style={{ height: "400px", width: "400px" }} />
        </div>
        <div className="mt-5 px-44">
          <p className="text-xl">
            Dược học là lĩnh vực khoa học ứng dụng, nghiên cứu về thuốc. Một
            Dược sĩ vừa tốt nghiệp có thể làm việc tại các trường cao đẳng, đại
            học có đào tạo Y Dược, tham gia{" "}
            <span className="font-bold">giảng dạy</span> trực tiếp, nghiên cứu
            tại nơi mình làm việc. Cùng Dầu tìm hiểu chi tiết hơn câu chuyện đi
            làm thực tế bằng cách điền thông tin vào bảng khảo sát nhé!
          </p>
        </div>
        <div className="mt-10">
          <button className="rounded-lg px-2 py-4" style={customButton}>
            <span className="px text-xl font-bold">Điền thông tin</span>
            <span
              className="bg-black text-white rounded-full px-2 py-1 mx-2"
              style={{ width: "10px", height: "10px" }}
            >
              <i class="fa-solid fa-angle-down"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UVNghienCuu;
