import React from 'react';
import { Link } from 'react-router-dom';

// assets and components
import SDTDLogo from '../assets/imgs/image-23.png';


const NavBar = () => {
    return (
        <div className=''>
            <nav className="
                z-50
                bg-white
                shadow-md w-full fixed top-0 left-0">
                <div className="flex justify-center">
                    <ul className="flex items-center py-4">
                        {/* Logo */}
                        <img
                            src={SDTDLogo}
                            alt="SDTD LOGO"
                            width={60}
                            height={55}
                            className="mr-4"
                        />
                        <li>
                            <Link className='py-4 px-6 
                                hover:underline underline-offset-1
                                text-green-600 
                                font-bold' to="/hohen">
                                Hò Hẹn
                            </Link>
                        </li>
                        <li>
                            <Link className='py-4 px-6 
                                hover:underline underline-offset-1
                                text-green-600 
                                font-bold' to="/kienthuc">
                                Kiến thức
                            </Link>
                        </li>
                        <li>
                            <Link className='py-4 px-6 
                                hover:underline underline-offset-1
                                text-green-600 
                                font-bold' to="/chuyennghe">
                                Chuyện nghề
                            </Link>
                        </li>
                        <li>
                            <Link className='py-4 px-6 
                                
                                hover:underline underline-offset-1
                                text-green-600 
                                font-bold' to="/lamduoc">
                                Làm dược
                            </Link>
                        </li>
                        <li>
                            <Link className='py-4 px-6 
                                
                                hover:underline underline-offset-1
                                text-green-600 
                                font-bold' to="/sukien">
                                Sự kiện
                            </Link>
                        </li>
                        <li>
                            <Link className='py-4 px-6 
                                
                                hover:underline underline-offset-1
                                text-green-600 
                                font-bold' to="/about">
                                Về chúng tôi
                            </Link>
                        </li>
                        <li>
                            <Link className='py-2 px-4
                                
                                hover:underline underline-offset-1
                                hover:bg-gray-200
                                shadow-md
                                rounded-md
                                bg-gray-50
                                border-solid
                                border-2
                                text-green-700 
                                font-bold' to="/dangnhap">
                                Đăng nhập
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default NavBar;