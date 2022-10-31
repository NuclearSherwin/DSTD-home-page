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
        className="mt-20 
            justify-center w-full
            ml-auto mr-auto px-28
        "
      >
        <div>
            
        </div>
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
