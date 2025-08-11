import React from 'react'
import Container from '../Layout/Container'
import banner from '../../assets/banner image.png'
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='bg-section'>
            <Container>
                <div className='md:flex '>

                    <div className="left pt-[60px] md:pt-[260px] pb-0 md:pb-[317px]">
                        <h1 className='w-auto md:w-[510px] font-primary text-[#261134] text-[35px] sm:text-[49px] leading-[70%] md:leading-[120%]'>A trusted provider of <span className='font-black leading-[100%]'> courier services.</span></h1>
                        <p className='w-auto md:w-[330px] font-primary text-[20px] leading-[120%] text-[#4D4D4D] pt-4 pb-[41px]'>We deliver your products safely to  your home in a reasonable time.</p>
                        <div className='bg-primary font-secondery font-bold text-white rounded  py-3 px-[20px] inline-flex gap-x-3 items-center'>
                            <a href="" >Get started</a>
                                <FaArrowRight />
                        </div>
                    </div>

                    <div className="right w-auto md:w-[958px] py-[60px] md:py-[170px]">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner