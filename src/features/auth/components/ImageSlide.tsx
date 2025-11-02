'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { flower1, flower2, flower3 } from '../../../../public/images'

const ImageSlide = () => {
  const imgList = [
    {
      id: 1,
      img: flower1,
    },
    {
      id: 2,
      img: flower2,
    },
    {
      id: 3,
      img: flower3,
    },
  ]

  return (
    <Swiper
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className='w-[700px] h-[800px] rounded-lg'
    >
      {imgList.map((item) => (
        <SwiperSlide key={item.id}>
          <Image src={item.img} width={400} height={500} alt='image' className='w-full h-full object-cover' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSlide
