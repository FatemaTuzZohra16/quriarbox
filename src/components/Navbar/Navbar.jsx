import React from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='shadow-lg'>
        <Container>
            <div className='flex items-center justify-between'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex items-center gap-x-[45px]'>
                    <div>
                        <ul className='flex gap-x-[25px] font-primary'>
                            <li><a href="" className='font-medium text-4 active text-primary'>Home</a></li>
                            <li><a href="" className='font-medium text-4 text-[#817382] hover:text-primary'>Our services</a></li>
                            <li><a href="" className='font-medium text-4 text-[#817382] hover:text-primary'>About Us</a></li>
                            <li><a href="" className='font-medium text-4 text-[#817382] hover:text-primary'>What’s new?</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-x-[10px] py-[15px]'>
                        <div className='bg-[#FFEDC9] py-[13px] px-[14px] text-[#FFAF0F] rounded'>
                            <IoSearchOutline />
                        </div>
                        <div className='font-secondery bg-[#FFE4D9] text-primary py-3 px-[20px] font-medium text-[20px] leading-[100%] rounded'>
                            <a href="">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar