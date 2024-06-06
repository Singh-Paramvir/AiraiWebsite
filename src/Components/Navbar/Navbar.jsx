import React, { useState } from 'react';
import'./Navbar.css';
import { FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import logo from '../../images/sec 1/logo_.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = (
        <div className='lg:hidden fixed top-0 left-0 w-full h-full transition-transform transform bg-gray-800 z-40'>
            <div className='flex justify-between items-center p-4 bg-gray-900'>
                <Link to='/'>
                    <img src={logo} alt="Company Logo" className='h-6'/>
                </Link>
                <button onClick={handleClick}>
                    <FaTimes className='text-white text-2xl -pr-30' />
                </button>
            </div>
            <ul className='font-lato text-center text-xl p-4'>
                <li className='z-20 my-4 w-full py-4 border-b-2 border-white hover:bg-slate-800 hover:rounded text-[24px]'>
                    <a href='/about'>About</a>
                </li>
                <li className='z-20 my-4 py-4 border-b-2 border-white hover:bg-slate-800 hover:rounded text-[24px]'>
                    <a href='/services'>Services</a>
                </li>
                <li className='z-20 my-4 py-4 border-b-2 border-white hover:bg-slate-800 hover:rounded text-[24px]'>
                    <a href='/whyus'>Why Us</a>
                </li>
                <li className='z-20 my-4 py-4 border-b-2 border-white hover:bg-slate-800 hover:rounded text-[24px]'>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </div>
    );

    return (
        <nav className='z-20'>
            <div className='navbar h-10vh pt-6 flex justify-between items-center z-50 text-white lg:py-5 pl-0 py-9  flex-1 pt-12'>
                <div className='flex items-center flex-1 mt-4 lg:pl-24'>
                    <Link to='/'>
                        <img src={logo} alt="Company Logo" className='pl-4 lg:px-6'/>
                    </Link>
                </div>
                <div className='nav-items hidden lg:flex flex-1 items-center justify-center font-normal pr-32'>
                    <ul className='font-lato font-medium flex gap-4 mr-13 mt-4 items-center justify-center z-40'>
                        <li>
                            <a href='/about' className='pr-6 text-[18px] font-bold z-40'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='/services' className='pr-6 text-[18px] font-bold z-40'>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href='/whyus' className='pr-6 text-[18px] font-bold z-40'>
                                Why Us
                            </a>
                        </li>
                        <li>
                            <a href='/contact' className='pr-6 text-[18px] font-bold z-40'>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href='/contact'>
                            <button className='z-20 bg-black bg-opacity-20 px-12 py-2 border-solid border-2 border-slate-200 rounded-full text-[18px] font-bold'>
                                Business Inquiry
                            </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='lg:hidden flex items-center z-40'>
                    {click && content}
                    <button className='transition text-3xl mr-4' onClick={handleClick}>
                        {click ? <FaTimes className='text-2xl font-black' /> : <IoMdMenu className='text-4xl font-black' />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
