import React from "react";
import HeaderUV from "./HeaderUV";
import avatar_user_dating from "../assets/imgs/logo-dating/avatar-user-dating.png";
import cong_ty_duoc_va_y_te_pic from "../assets/imgs/uv-dating-pics/cong-ty-duoc-thiet-bi-y-te.png";
const UVDating = () => {
  return (
    <div>
      <HeaderUV />
      {/* Body */}
      <h2 className="text-2xl font-bold ml-48 mt-5">Let's start a date!</h2>
      <div className="ml-48">
        <div className="mt-5 flex flex-nowrap items-center justify-center">
          <div
            className="border-x-2 mr-6 relative bg-white-400"
            style={{ height: "350px", width: "350px" }}
          >
            <img
              className="absolute m-4"
              src={avatar_user_dating}
              alt="logo"
              style={{ height: "60px", width: "60px" }}
            />
          </div>
          <div
            className="border-x-2 mr-6 relative bg-white-400"
            style={{ height: "350px", width: "350px" }}
          >
            <img
              className="absolute m-4"
              src={avatar_user_dating}
              alt="logo"
              style={{ height: "60px", width: "60px" }}
            />
          </div>
          <div
            className="border-x-2 mr-6 relative bg-white-400"
            style={{ height: "350px", width: "350px" }}
          >
            <img
              className="absolute m-4"
              src={avatar_user_dating}
              alt="logo"
              style={{ height: "60px", width: "60px" }}
            />
          </div>
          <div
            className="border-x-2 mr-6 relative bg-white-400"
            style={{ height: "350px", width: "350px" }}
          >
            <img
              className="absolute m-4"
              src={avatar_user_dating}
              alt="logo"
              style={{ height: "60px", width: "60px" }}
            />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold ml-48 mt-10">
        Bạn muốn được lĩnh vực công việc nào?
      </h2>
      {/* Linh vuc cong viec */}
      <div className="mt-10 justify-center flex flex-wrap">
        <div className="block p-1 border-2 mr-10 mb-10">
          <h2 className="text-xl font-bold text-center">Công ty Dược & thiết bị Y tế</h2>
          <img
            className="mt-2"
            src={cong_ty_duoc_va_y_te_pic}
            alt="logo"
            style={{ height: "235px", width: "520px" }}
          />
        </div>
        <div className="block p-1 border-2 ml-10 mb-10">
          <h2 className="text-xl font-bold text-center">Sản xuất & Kiểm nghiệm</h2>
          <img
            className="mt-2"
            src={cong_ty_duoc_va_y_te_pic}
            alt="logo"
            style={{ height: "235px", width: "520px" }}
          />
        </div>
        <div className="block p-1 border-2 mr-20">
          <h2 className="text-xl font-bold text-center">Dược bệnh viện & Nhà thuốc</h2>
          <img
            className="mt-2"
            src={cong_ty_duoc_va_y_te_pic}
            alt="logo"
            style={{ height: "235px", width: "520px" }}
          />
        </div>
        <div className="block p-1 border-2">
          <h2 className="text-xl font-bold text-center">Nghiên cứu & Giảng dạy</h2>
          <img
            className="mt-2"
            src={cong_ty_duoc_va_y_te_pic}
            alt="logo"
            style={{ height: "235px", width: "520px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UVDating;
