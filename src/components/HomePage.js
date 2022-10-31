// import form components
import ImageSlider from "../assets/imgs/image-slide.png";
import Footer from "./Footer";
import LightCareer from "./LightCareer";
import RecentUpload from "./RecentUpload";
import ShadowShow from "./ShadowShow";
import ShadowShow2 from "./ShadowShow2";
import SliderComponent from "./Slider";

const HomePage = () => {
  return (
    <>
     <div 
     style={{top: "100px", left: "500px"}}
      className="rounded-lg w-96 h-56 bg-white-500 absolute z-40 opacity-80">
              <h1 className="text-center text-3xl pt-6 font-bold z-50">SLOGAN!!!</h1>
              <p className="italic text-2xl text-center pt-6 px-4 z-40">VD: "Trăm ngàn lời chat không bằng một lát bên nhau"</p>
        </div>
      <div
        className="mt-20 
            justify-center w-full
            ml-auto mr-auto px-28
        "
      >
       
        {/* slider */}
        <SliderComponent />
        {/* Recent upload videos */}
        <RecentUpload />
        {/* Shadow show */}
        <ShadowShow />
        {/* Light Career */}
        <LightCareer />
        {/* Shadow show */}
        <ShadowShow2 />
        {/* Footer */}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
