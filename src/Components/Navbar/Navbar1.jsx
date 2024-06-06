import React from 'react';
import logo from '../../images/sec 1/company logo.png';
import { Link } from 'react-scroll';
export const Navbar1 = () => {
    let Links =[
        {name:"About", link:"/"},
        {name:"Service", link:"/"},
        {name:"Why us", link:"/"},
        {name:"Contact", link:"/"}
    ]
  return (
    <div className='w-full  fixed top=0 left-0'>
<div className='md:flex itmes-center justify-between py-4 md:px-10 px-7'>
    <div className=''>
    <img src={logo} alt="" />
    </div>
<div>
    <icon-icon name="menu"></icon-icon>
</div>
<ul className=' mr-16 md:flex md:items-center md-pb-0 pb-12 absoulte md-static  md:z-auto z-[-1] left-0 w-full 
md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in '>
    {
        Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
                <a href={link.link} className='text-white'>
                    {link.name}
                </a>
            </li>
        ))
    }
    <button className='bg-transparent mx-5 px-4 py-2 border-solid border-2 border-slate-200 rounded-full text-white'>
              Business Inquiry
            </button>
</ul>
</div>
    </div>
  )
}
