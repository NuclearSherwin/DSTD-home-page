import React from "react";

// assets and components
import ShadowShowImg from "../assets/imgs/shadowshow.png";

const ShadowShow2 = () => {
  return (
    <div>
      <h1 className="mt-8 ml-2 pl-2 mb-5 text-3xl font-bold">Shadow Show</h1>

      <div class="flex justify-items-start mr-12">
        <div
            style={{width: "31rem"}}
          class="block rounded-lg
                    shadow-lg bg-white "
        >
          <img
            src={ShadowShowImg}
            alt=""
            className=""
            // width={96}
          />
          <p className="text-3xl font-bold mb-20">
            [Worknowledge] ABC ...
          </p>
        </div>
        <div className="block ml-12">
          <div class="block rounded-lg bg-white w-64">
            <div className="flex mb-6">
              <img src={ShadowShowImg} alt="" className="mb-2" />
            </div>

            <img src={ShadowShowImg} alt="" className="mb-2" />
          </div>

          <button
            type="button"
            class="border-2 inline-block mt-16 px-24 py-2.5 bg-white-700 text-black
                         font-medium text-xs leading-tight uppercase rounded-lg shadow-lg
                          hover:bg-green-600
                           hover:text-white hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                             active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Xem thêm
          </button>
        </div>
        <div className="block mr-2">
          <div className="pb-20 mb-12 ml-4">
            <p className="text-3xl font-bold">
            [Worknowledge] ABC ...
            </p>
            <div className="flex mt-2 mr-6">
              <p className="text-gray-600">[Mô tả ngắn]</p>
              {/* <p className="text-gray-600">
                Nguyễn Văn A 5 năm kinh nghiệm trong ngành Marketing
              </p> */}
            </div>
          </div>
          <div className="ml-4">
            <p className="text-3xl font-bold">
            [Worknowledge] ABC ...
            </p>
            <div className="flex mt-2 mr-6">
              <p className="text-gray-600">[Mô tả ngắn]</p>
              {/* <p className="text-gray-600">
                Nguyễn Văn A 5 năm kinh nghiệm trong ngành Marketing
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShadowShow2;
