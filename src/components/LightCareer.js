import React from "react";

// assets components
import ShadowShowImg from "../assets/imgs/shadowshow.png";
import Servier from "../assets/imgs/servier.png";
import Sanofi from "../assets/imgs/sanofi.png";
import Pfizer from "../assets/imgs/Pfizer.png";
import AstraZeneca from "../assets/imgs/AstraZeneca.png";

const LightCareer = () => {
  return (
    <div className="mb-10">
      <h1 className="mt-5 ml-4 text-2xl font-bold">Light Career</h1>
      <div className="flex">
        <h1 className="mt-5 ml-4">Talkshows</h1>
        <h1 style={{"margin-left": "34rem"}} className="mt-5">Công ty</h1>
      </div>
      <div className="mt-6 flex items-center">
        {/* basic card */}
        <div className="flex">
          <div className="block">
            <div className="block pb-12 p-0 mb-14 mr-12 shadow-lg bg-white w-56">
              {/* <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
              <img src={ShadowShowImg} alt="" className="mb-2" />
              <p className="font-bold">[Light Career] ABC ...</p>
            </div>
            <div className="block pb-12 p-0 shadow-lg bg-white w-56">
              {/* <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
              <img src={ShadowShowImg} alt="" className="mb-2" />
              <p className="font-bold">[Light Career] ABC ...</p>
            </div>
          </div>
          <div className="block">
            <div className="block pb-12 p-0 mb-14 shadow-lg bg-green w-56">
              {/* <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
              <img src={ShadowShowImg} alt="" className="mb-2" />
              <p className="font-bold">[Light Career] ABC ...</p>
            </div>
            <div className="block p-0  pb-12 shadow-lg bg-white w-56">
              {/* <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
              <img src={ShadowShowImg} alt="" className="mb-2" />
              <p className="font-bold">[Light Career] ABC ...</p>
            </div>
          </div>
        </div>
        {/* separator */}
        <div
            className="flex items-center justify-center
                       mx-10 w-10 hover:bg-green-200"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", height: "32rem" }}
          >
            <span className="bg-black text-white w-6 h-6 text-center rounded-full">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>

        {/* Company */}
        <div className="block ml-0 justify-start mr-14">
          <div className="flex">
            <div
                className="mb-16 mr-12 block w-56 h-56 items-center"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
                <img className="items-center" src={Servier} alt="Servier" />
            </div>
                <div className="w-56 h-56 items-center">
                    <img className="items-center" src={Sanofi} alt="Sanofi" />
                </div>
            </div>
          {/*  */}
            <div className="flex items-center">
                <div className="w-56 h-56 flex items-center justify-center">
                    <img className="" src={Pfizer} alt="Pfizer" />
                </div>
                <div
                    className="flex items-center ml-14 w-56 h-56"
                    style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <img className="" src={AstraZeneca} alt="AstraZeneca" />
                </div>
            </div>
        </div>

        {/* separator */}
        <div
            className="mr-0 flex items-center justify-center
                       w-10 hover:bg-green-200"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", height: "32rem" }}
          >
            <span className="bg-black text-white w-6 h-6 text-center rounded-full">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>       
    
      </div>
    </div>
  );
};

export default LightCareer;
