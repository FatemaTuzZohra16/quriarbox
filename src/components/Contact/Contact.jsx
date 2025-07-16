import React from 'react'
import Container from '../Layout/Container'
import contact from '../../assets/contact.png'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    return (
        <div className='bg-section pb-[169px]'>
            <Container>
                <div className='w-[872px] flex justify-between mx-auto'>
                    <div className="left">
                        <img src={contact} alt="" />
                        <h3 className='font-secondery font-bold text-[24px] leading-[100%] text-primary pt-[13px] pb-5'>REQUEST A CALLBACK</h3>
                        <h1 className='w-[412px] font-primary font-extrabold text-[39px] leading-[110%] text-[#222132]'>We will contact in the shortest time.</h1>
                        <p className='font-primary font-semibold pt-[10px] text-[25px] leading-[120%] text-[#9291A1]'>Monday to Friday, 9am-5pm.</p>
                    </div>
                    <div className="right pt-[35px]">
                        <div className='w-[423px] rounded-[8px] border-2 border-[#C5C5D2] py-[15px] pl-[19px] font-primary text-[#9291A1] leading-[120%] text-base'>
                            <input type="text" placeholder='Name' className='w-full bg-transparent outline-none '/>
                        </div>
                        <div className='w-[423px] rounded-[8px] border-2 border-[#C5C5D2] py-[15px] pl-[19px] font-primary text-[#9291A1] leading-[120%] text-base my-4'>
                            <input type="email" placeholder='Email' className='w-full bg-transparent outline-none '/>
                        </div>
                        <div className='w-[423px] h-[154px] rounded-[8px] border-2 border-[#C5C5D2] py-[15px] pl-[19px] font-primary text-[#9291A1] leading-[120%] text-base mb-[54px]'>
                            <textarea name="messege" id="messege" placeholder="Message"className='w-full bg-transparent outline-none '></textarea>
                        </div>
                        <div className='bg-primary font-secondery font-bold text-white rounded  py-3 px-[131px] flex gap-x-3 items-center mx-auto'>
                            <a href="" >Send Message</a>
                            <IoIosSend />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact