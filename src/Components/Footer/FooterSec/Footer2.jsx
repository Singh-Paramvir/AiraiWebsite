import React from 'react';
import './Footer2.css';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../../../images/sec 8/logo_.png';
import bg1 from '../../../images/sec 8/bg.png';
import bg2 from '../../../images/sec 8/Rectangle 6.png';
import location from '../../../images/sec 8/location.png';
import call from '../../../images/sec 8/phone-call.png';
import mail from '../../../images/sec 8/mail.png';

const Footer2 = () => {
  return (
    <footer className="bg-cover bg-center bg-no-repeat h-auto w-full" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="container mx-auto">
        <div className=" foter-detail flex flex-wrap justify-between  px-36 py-12 pb-5 md:px-0">
          <div className="media-div flex flex-col items-center justify-center w-full md: lg:w-1/4 mb-8 mr-32 sm:w-full">
            <div className="logo-div  flex-cols items-center mb-4 justify-center">
              <img src={logo} alt="Company Logo" className="lg:ml-5 logo-Comp" />
            </div>
            <div className="follow flex-cols items-center">
              <p className="text-white font-normal font-lato text-sm mt-3 mb-2">Follow us on</p>
              <div className="media flex space-x-5 p-0 m-0 ">
              <a href="https://www.instagram.com/airaitechnologies/" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={30} color="#ffffff"/>
    </a>
    <a href="https://www.facebook.com/AiraiTechnologies" target="_blank" rel="noopener noreferrer">
    <FaFacebookSquare size={30} color="#ffffff"/>
    </a>
    <a href="https://www.linkedin.com/company/94156079/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} color="#ffffff"/>
    </a>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-3/4 lg:w-1/4 mb-8 justify-items-stretch items-center">
            <h4 className="text-white font-black font-lato text-xl mb-2 justify-self-start">Quick Links</h4>
            <ul className="text-white font-normal font-lato text-base justify-self-start text-left">
              <li className="p-2 pl-0 "><a href="/">Home</a></li>
              <li className="p-2 pl-0"><a href="/about">About us</a></li>
              <li className="p-2 pl-0"><a href="/services">Services</a></li>
              <li className="p-2 pl-0"><a href="/whyus">Why Us</a></li>
              <li className="p-2 pl-0"><a href="/contact">Contact us</a></li>
            </ul>
          </div>
          {/* <div className="w-full md:w-1/2 lg:w-1/4">
            <h4 className="text-white font-black font-lato text-xl mb-2">Services</h4>
            <ul className="text-white font-normal font-lato text-base">
              <li className="p-2 pl-0"><a href="/">Mobile app designing & development</a></li>
              <li className="p-2 pl-0"><a href="/">Mobile app designing & development</a></li>
              <li className="p-2 pl-0"><a href="/">Game designing & development</a></li>
              <li className="p-2 pl-0"><a href="/">NFT & Blockchain services</a></li>
              <li className="p-2 pl-0"><a href="/">Graphic designing</a></li>
              <li className="p-2 pl-0"><a href="/">Front-end & Back-end services</a></li>
              <li className="p-2 pl-0"><a href="/">UI/UX designing</a></li>
              <li className="p-2 pl-0"><a href="/">3d modeling & texturing</a></li>
            </ul>
          </div> */}
          <div className="address w-full md:w-3/4 lg:w-1/4 text-white font-normal text-base mr-12">
            <h4 className="text-white font-black font-lato text-xl mb-2">Contact us</h4>
            <p className="pr-16 leading-9">
              <img src={location} alt="Address" className="w-4 h-4 inline-block mr-2" />
              F-177,2nd floor, Kailash Tower, Phase-8b, Industrial Area, Sector 74,
              Mohali, 140308, India
            </p>
            <p className="pr-16 leading-9">
              <img src={call} alt="Phone" className="w-4 h-4 inline-block mr-2" />
              +91 98771-50016
            </p>
            <p className="pr-16 leading-9">
              <img src={mail} alt="Email" className="w-4 h-4 inline-block mr-2" />
              hr.manager@airai.games
            </p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="copyright w-100% text-center text-gray-600 text-sm bg-cover bg-center " style={{ backgroundImage: `url(${bg2})` }}>
          <p className="text-black font-medium text-sm py-3">
            <span className="text-black font-bold">&copy;</span> {new Date().getFullYear()}, Airai Technologies Pvt. Ltd. - Terms and Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
