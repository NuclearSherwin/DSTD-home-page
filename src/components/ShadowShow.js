import React from 'react'


// assets and components
import ShadowShowImg from '../assets/imgs/shadowshow.png';

const ShadowShow = () => {
    return (
        <div>
            <h1 className='mt-5 mb-5 text-2xl font-bold'>
                Work knowledge
            </h1>

            <div class="flex justify-items-start">
                <div class="block p-6 py-8 rounded-lg 
                    max-h-full
                    shadow-lg bg-white ">
                    {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                    <img src={ShadowShowImg} alt=""
                        className='mb-2'
                    />
                </div>
                <div className='block mt-2'>
                    <div class="block p-6 rounded-lg bg-white w-96">
                        <div className='flex'>
                            <img src={ShadowShowImg} alt=""
                                className='mb-2'
                            />
                        </div>

                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                    </div>
                    <div class="flex mr-auto ml-auto drop-shadow-md items-center justify-center p-4 rounded-lg h-16 shadow-lg bg-white w-72">
                        <button type="button" class="border-1 inline-block px-6 py-2.5 bg-white-700 text-black font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-green-600 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Xem thêm</button>
                    </div>
                </div>
                <div className='block mt-8'>
                    <div className='pb-20'>
                        <p className='text-xl font-bold'>[Shadow Show] Marketing dược có cần sáng tạo</p>
                        <div className='flex mt-2'>
                            <p className='text-gray-600'>[Mô tả ngắn]</p>
                            <p className='text-gray-600'>Nguyễn Văn A 5 năm kinh nghiệm trong ngành Marketing</p>
                        </div>
                    </div>
                    <div className='pt-20'>
                        <p className='text-xl font-bold'>[Shadow Show] Marketing dược có cần sáng tạo</p>
                        <div className='flex mt-2'>
                            <p className='text-gray-600'>[Mô tả ngắn]</p>
                            <p className='text-gray-600'>Nguyễn Văn A 5 năm kinh nghiệm trong ngành Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShadowShow;
