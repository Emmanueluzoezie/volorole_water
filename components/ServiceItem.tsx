import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    images:any,
    title: string,
    description: string
}

const ServiceItem = ({ images, title, description }: Props) => {
    
  return (
      <div className='flex justify-center my-6 mx-4 shadow-xl'>
          <div className='w-full md:w-[400px]'>
              <div className="w-full">
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
                      {images.map((image: any) => (
                          <SwiperSlide key={image.id}>
                              <div className='relative w-full h-[300px]'>
                                  <Image src={image.image} alt="" layout='fill' objectFit='cover' />
                              </div>
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </div>
              <div className='py-4 w-full px-2'>
                  <h2 className='font-semibold text-[20px] capitalize'>{title}</h2>
                  <p className='line-clamp-3 text-[15px]'>{description}</p>
                  <Link href="" className='text-blue-500 hover:underline'>Read more</Link>
              </div>
          </div>
      </div>
  )
}

export default ServiceItem