import React from 'react'
import Container from '../Layout/Container'
import delivery from '../../assets/delivery.png'
import { BiSolidRightArrow } from "react-icons/bi";

const Delivery = () => {
    return (
        <div className='bg-section pb-[150px]'>
            <Container>
                <div className='relative'>
                    <img src={delivery} alt="" />
                    <div className='absolute text-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='relative w-[86px] h-[86px] rounded-full bg-primary mx-auto'>
                            <BiSolidRightArrow  size={40} className='absolute text-white top-[50%] left-[50%] transform -translate-1/2'/>
                        </div>
                        <h3 className='font-secondery font-bold text-[31px] leading-[100%] text-primary pt-5 pb-7'>FASTEST DELIVERY</h3>
                        <p className='w-[673px] font-primary text-[25px] leading-[120%] text-white'> You can get your valuable item in the fastest period of
                            time with safety. Because your emergency 
                            is our first priority.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Delivery