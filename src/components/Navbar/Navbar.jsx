import React, { useState } from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClick = ()=>{
        setShow("true")
    }
  return (
    <div className='shadow-lg'>
        <Container>
            <div className='md:flex items-center justify-between'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="" />
                    <div className='block md:hidden cursor-pointer'>
                        <FaBars  size={24} onClick={handleClick}/>
                    </div>
                </div>
                <div className='hidden md:flex items-center gap-x-[45px]'>
                    <div>
                        <ul className='hidden md:flex gap-x-[25px] font-primary'>
                            <li><a href="" className='font-medium text-4 active text-primary'>Home</a></li>
                            <li><a href="" className='font-medium text-4 text-[#817382] hover:text-primary'>Our services</a></li>
                            <li><a href="" className='font-medium text-4 text-[#817382] hover:text-primary'>About Us</a></li>
                            <li><a href="" className='font-medium text-4 text-[#817382] hover:text-primary'>What’s new?</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex gap-x-[10px] py-[15px]'>
                        <div className='bg-[#FFEDC9] py-[13px] px-[14px] text-[#FFAF0F] rounded inline-block mt-[24px] md:mt-0'>
                            <IoSearchOutline />
                        </div>
                        <div className='font-secondery bg-[#FFE4D9] text-primary py-3 px-[20px] font-medium text-[20px] leading-[100%] rounded inline-block'>
                            <a href="">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
            {
                show &&
                <div className='relative md:flex items-center gap-x-[45px] bg-primary justify-center py-[60px] mt-9 shadow-[0_0px_20px_rgba(0,0,0,0.75)]'>
                    <div className='absolute text-white top-[50%] transform -translate-y-1/2 left-10 cursor-pointer'>
                        <ImCross  size={24} onClick={()=>{setShow(false)}}/>

                    </div>
                    <div className='flex flex-col items-center'>
                        <ul className='md:flex gap-x-[25px] font-primary'>
                            <li><a href="" className='font-medium text-4 active text-black'>Home</a></li>
                            <li><a href="" className='font-medium text-4 text-white text-center hover:text-black'>Our services</a></li>
                            <li><a href="" className='font-medium text-4 text-white text-center hover:text-black'>About Us</a></li>
                            <li><a href="" className='font-medium text-4 text-white text-center hover:text-black'>What’s new?</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-x-[10px] py-[30px] justify-center'>
                        <div className='bg-[#FFEDC9] py-[13px] px-[14px] text-[#FFAF0F] rounded inline-block'>
                            <IoSearchOutline />
                        </div>
                        <div className='font-secondery bg-[#FFE4D9] text-primary py-3 px-[20px] font-medium text-[20px] leading-[100%] rounded inline-block'>
                            <a href="">Contact us</a>
                        </div>
                    </div>
                </div>
            }
        </Container>
    </div>
  )
}

export default Navbar