import React from 'react'

// assets and components
import ShadowShowImg from '../assets/imgs/shadowshow.png';

const RecentUpload = () => {
    return (
        <div>
            <div className='mt-10'>
                <h1 className='font-bold text-3xl pt-2 pl-2 pb-6 '>Tải lên gần đây</h1>
                {/* basic card */}
                <div class="flex justify-center">
                    <div class="block mr-6  pb-16 shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-0'
                        />
                        <p className='font-bold'>
                            [Shadow Show] Marketing ...
                        </p>
                    </div>
                    <div class="block mx-6 pb-16 shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <p className='font-bold'>
                            [Light Career] ABC ...
                        </p>
                    </div>
                    <div class="block mx-6 pb-16 shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <p className='font-bold'>
                            [Worknowledge] CDE ...
                        </p>
                    </div>
                    <div class="block mx-6  pb-16 shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <p className='font-bold'>
                            [Shadow Show] Marketing ...
                        </p>
                    </div>
                    <div class="block ml-6 pb-16 shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <p className='font-bold'>
                            [Bùa lab] EFG ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentUpload