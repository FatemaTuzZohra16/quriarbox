import React from 'react'
import Container from '../Layout/Container'
import ratings1 from '../../assets/ratings1.svg'
import ratings2 from '../../assets/ratings2.svg'
import ratings3 from '../../assets/ratings3.svg'
import ratings4 from '../../assets/ratings4.svg'
import ratings5 from '../../assets/ratings5.svg'

const Ratings = () => {
    const ratingData =[
        {
            img: ratings1,
            title: "26+",
            text: "Awards  won"
        },
        {
            img: ratings2,
            title: "65+",
            text: "States covered"
        },
        {
            img: ratings3,
            title: "689K+",
            text: "Happy clients"
        },
        {
            img: ratings4,
            title: "130M+",
            text: "Goods delivered"
        },
        {
            img: ratings5,
            title: "130M+",
            text: "Business hours"
        },
    ]
  return (
    <div className='bg-section pb-[162px]'>
        <Container>
            <div className='flex flex-wrap justify-between items-center gap-14'>
                {
                    ratingData.map((index)=>(
                        <div className='text-center'>
                            <img src={index.img} alt=""  className='mx-auto'/>
                            <h1 className='font-extrabold text-[36px] sm:text-[39px] leading-[44px] text-primary pt-[20px] sm:pt-[28px] pb-[18px]'>{index.title}</h1>
                            <p className='font-primary font-bold text-[18px] sm:text-[20px] leading-[120%] text-[#464558]'>{index.text}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Ratings