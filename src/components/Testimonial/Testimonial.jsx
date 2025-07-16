import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import client from '../../assets/client.png'
import testimonial from '../../assets/testimonial.svg'

const Testimonial = () => {
  return (
    <div className='bg-section pb-[266px]'>
        <Container>
            <div className='relative pt-[5px]'>
                <div className='absolute top-0 left-[278px]'>
                    <img src={testimonial} alt="" />
                </div>
                <div className='text-center'>
                <h1 className='font-secondery font-bold text-[31px] leading-[100%] text-primary'>TESTIMONIAL</h1>
                <h2 className='font-primary font-extrabold text-[49px] leading-[100%] pt-[11px] pb-[86px]'>Our Awesome Clients</h2>
            </div>
            </div>
            <div className='w-[872px] mx-auto bg-white p-[38px] shadow-lg rounded-[16px]'>
                <h5 className='font-primary font-bold text-[25px] leading-[120%] text-primary'>Fantastic service!</h5>
                <p className='font-primary text-base leading-[145%] pt-4 pb-6 text-[#464558] '>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                <div className='flex justify-between'>
                    <div className='flex gap-x-[7px] text-primary'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className='flex items-center gap-x-[13px]'>
                        <div className="left">
                            <h6 className='font-primary font-bold text-base leading-[120%] text-[#222132] text-end pb-[5px]'>Yves Tanguy</h6>
                            <p className='font-primary text-base leading-[120%] text-[#222132]'>Chief Executive, DLF</p>
                        </div>
                        <div className="right">
                            <img src={client} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonial