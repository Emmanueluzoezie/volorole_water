import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { boreholeImage } from '../utilies/imageData';
import { appColor } from './AppColor';

const SecondHomeComponent = () => {
  return (
    <div className=' p-[20px] py-10 md:py-32' style={{backgroundColor: appColor.lightPrimaryColor}}>
        <div className='max-w-[1150px] mx-auto md:flex items-center md:space-x-5'>
            <div className='pb-10 md:pb-0'>
                  <h2 className='text-center text-[24px] font-semibold md:text-[32px]  lg:text-[38px]'>Mission Statement</h2>
                <p className='md:text-[22px]'>We provide water solutions that matter. Our team or skilled professionals is dedicated to delivering quality and reliable services. From fixing water machines to drilling boreholes and building swimming pools, we've got you covered. At Water Solution. we value our customers and aim to exceed their execrations.</p>
            </div>
              <div className="w-full md:w-[400px] lg:w-[550px]">
                  <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                  >
                      {boreholeImage.map((image: any) => (
                          <SwiperSlide key={image.id}>
                              <div className='relative w-full h-[300px] lg:h-[400px]'>
                                  <Image src={image.image} alt="" layout='fill' objectFit='cover' />
                              </div>
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </div>
        </div>
    </div>
  )
}

export default SecondHomeComponent