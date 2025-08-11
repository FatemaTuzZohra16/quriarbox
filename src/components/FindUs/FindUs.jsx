import React from 'react'
import Container from '../Layout/Container'
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className='bg-section pb-[183px]'>
            <Container>
                <div className='text-center'>
                    <h1 className='font-secondery font-bold text-[31px] leading-[100%] text-primary'>FIND US</h1>
                    <h2 className='font-primary font-extrabold text-[43px] md:text-[49px] leading-[100%] pt-[11px] pb-[86px]'>Access us easily</h2>
                </div>
                <div className='md:flex gap-x-[23px]'>
                    <div className="left w-auto md:w-[760px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466740.43256272946!2d88.70112687149458!3d23.945950922555614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1752593351565!5m2!1sen!2sbd" width="760" height="428" style={{ border: 0 }} allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="right w-[536px] bg-white pt-[81px] pb-[88px] pl-[85px]">
                        <h3 className='font-primary font-bold text-[20px] leading-[120%] text-[#464558]'>Contact with us</h3>
                        <div className='pt-[37px] pb-[51px]'>
                            <div className='flex gap-x-[13px]'>
                                <CiLocationOn size={27} className='text-[#FFAF0F]' />
                                <p className='text-base leading-[120%]'>2277 Lorem Ave, San Diego, CA 22553</p>
                            </div>
                            <div className='flex gap-x-[13px] py-[15px]'>
                                <CiClock2 size={27} className='text-[#FFAF0F]' />
                                <div className='flex flex-col'>
                                    <p className='text-base leading-[120%]'>Monday - Friday: 10 am - 10pm</p>
                                    <p className='text-base leading-[120%]'>Sunday: 11 am - 9pm</p>
                                </div>
                            </div>
                            <div className='flex gap-x-[13px]'>
                                <CiMail size={27} className='text-[#FFAF0F]' />
                                <p className='text-base leading-[120%]'>info@quriarbox.com</p>
                            </div>
                        </div>
                        <div className='flex gap-x-[24px] text-[#EBEBF5]'>
                            <FaFacebookSquare size={22} className="hover:text-primary cursor-pointer transition" />
                            <RiInstagramFill size={22} className="hover:text-primary cursor-pointer transition" />
                            <FaTwitterSquare size={22} className="hover:text-primary cursor-pointer transition" />
                        </div>
                    </div>
                </div>
               <div className='text-center mt-[30px]'>
                <div className='bg-primary font-secondery font-bold text-white rounded  py-[22px] px-[113px] inline-flex gap-x-3 items-center mx-auto'>
                    <FaPhoneAlt />
                    <a href="" >Call us to delivery  123-456789</a>
                </div>
                </div> 
            </Container>
        </div>
    )
}

export default FindUs