import React from 'react'

// assets and components
import ShadowShowImg from '../assets/imgs/shadowshow.png';

const RecentUpload = () => {
    return (
        <div>
            <div className='mt-10'>
                <h1 className='font-bold text-xl p-2'>Tải lên gần đây</h1>
                {/* basic card */}
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <button type="button" class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Xem</button>
                    </div>
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <button type="button" class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Xem</button>
                    </div>
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <button type="button" class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Xem</button>
                    </div>
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <button type="button" class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Xem</button>
                    </div>
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                        <img src={ShadowShowImg} alt=""
                            className='mb-2'
                        />
                        <button type="button" class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Xem</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentUpload