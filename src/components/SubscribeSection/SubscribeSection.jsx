import React from 'react'
import Container from '../Layout/Container'

const SubscribeSection = () => {
    return (
        <div className='bg-[#222132]'>
            <Container>
                <div className='flex justify-between pt-[84px] pb-[104px]'>
                    <div className="left">
                        <h2 className='font-primary font-extrabold text-[39px] leading-[110%] text-white'>Get an update every week
                        </h2>
                        <p className='w-[501px] font-primary text-base leading-[110%] text-[#C5C5D2] pt-5'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                    </div>
                    <div className="right">
                        <h3 className='font-secondery font-bold text-[18px] leading-[100%] text-primary mb-[13px]'>SUBSCRIBE TO NEWSLETTER</h3>
                        <div className='flex gap-x-[16px]'>
                            <div className='w-[386px] border border-[#C5C5D2] text-[#7B7A8B] py-[15px] pl-[18px] rounded'>
                                <input type="text" placeholder='Enter your mail' className='w-full bg-transparent outline-none '/>
                            </div>
                            <div className='bg-primary font-secondery font-bold text-[20px] leading-[100%] text-white rounded  py-3 px-[20px] flex items-center'>
                                <a href="" >Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SubscribeSection