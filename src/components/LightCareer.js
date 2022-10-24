import React from 'react'

// assets components
import ShadowShowImg from '../assets/imgs/shadowshow.png'
import Servier from '../assets/imgs/servier.png'
import Sanofi from '../assets/imgs/sanofi.png'
import Pfizer from '../assets/imgs/Pfizer.png'
import AstraZeneca from '../assets/imgs/AstraZeneca.png'

const LightCareer = () => {
    return (
        <div>
            <h1 className='mt-5 text-2xl font-bold'>Light Career</h1>
            <div className='flex justify-around'>
                <h1 className='mt-5 text-xl'>Talkshows</h1>
                <h1 className='mt-5 text-xl'>Công ty</h1>
            </div>
            <div className='mt-10 flex items-center justify-between'>
                {/* basic card */}
                <div className="flex justify-start">
                    <div className='block'>
                        <div className="block p-0 m-2 rounded-lg shadow-lg bg-white max-w-sm">
                            {/* <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                            <img src={ShadowShowImg} alt=""
                                className='mb-2'
                            />
                        </div>
                        <div className="block p-0 m-2 rounded-lg shadow-lg bg-white max-w-sm">
                            {/* <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                            <img src={ShadowShowImg} alt=""
                                className='mb-2'
                            />
                        </div>
                    </div>
                    <div className='block'>
                        <div className="block p-0 m-2 rounded-lg shadow-lg bg-white max-w-sm">
                            {/* <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                            <img src={ShadowShowImg} alt=""
                                className='mb-2'
                            />
                        </div>
                        <div className="block p-0 m-2 rounded-lg shadow-lg bg-white max-w-sm">
                            {/* <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                            <img src={ShadowShowImg} alt=""
                                className='mb-2'
                            />
                        </div>
                    </div>
                </div>
                <div className="block justify-start">
                    <div className='flex items-center justify-center 
                     block mx-8 w-10 hover:bg-green-200 h-96' style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                        <span className='bg-black text-white w-6 h-6 text-center rounded-full'>
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <div className="flex ml-2 justify-start flex-1 flex-wrap">
                    <div className='flex mb-2 block w-64 h-64 mr-4 items-center' style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                        <img className="items-center" src={
                            Servier
                        } alt="Servier" />
                    </div>
                    <div className='flex mb-2 block w-64 h-64 items-center'>
                        <img className="items-center" src={Sanofi} alt="Sanofi" />
                    </div>
                    <div className='flex block w-64 h-64 mr-4 items-center'>
                        <img className="items-center" src={Pfizer} alt="Pfizer" />
                    </div>
                    <div className='flex block w-64 h-64 items-center' style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                        <img className="items-center" src={AstraZeneca} alt="AstraZeneca" />
                    </div>
                </div>
                <div className="block justify-start">
                    <div className='flex items-center justify-center 
                     block mx-2 w-10 hover:bg-green-200 h-96' style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                        <span className='bg-black text-white w-6 h-6 text-center rounded-full'>
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LightCareer;