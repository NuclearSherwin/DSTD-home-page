
// import form components
import ImageSlider from '../assets/imgs/image-slide.png'
import Footer from './Footer';
import LightCareer from './LightCareer';
import RecentUpload from './RecentUpload';
import ShadowShow from './ShadowShow';
import SliderComponent from './Slider';

const HomePage = () => {
    return (
        <div className="mt-28 
        justify-center w-full
        ml-auto mr-auto
        ">
            <div className=''>
                {/* slider */}
                <SliderComponent />
                {/* Recent upload videos */}
                <RecentUpload />
                {/* Shadow show */}
                <ShadowShow />
                {/* Light Career */}
                <LightCareer />
                {/* Shadow show */}
                <ShadowShow />
                {/* Footer */}
                <Footer />
            </div>

        </div>
    )
}

export default HomePage;