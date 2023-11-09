import React from 'react'
import { appColor } from './AppColor'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { boreholeImage } from '../utilies/imageData';
import Image from 'next/image';

export const HomeArticleComponent = () => {
  return (
      <div className='p-4 md:p-10 bg-[#e4e8de] mt-[30px]'>
        <div className='flex items-center'>
            <div className='flex-[0.4] sm:flex-1 border-[1px]' style={{borderColor: appColor.primaryBgColor}}/>
            <h2 className='flex-1 lg:flex-[0.6] text-center font-semibold px-[2px] md:text-[24px] lg:text-[26px]'>Features and benefits</h2>
                <div className='flex-[0.4] sm:flex-1 m border-[1px]' style={{borderColor: appColor.primaryBgColor}}/>
        </div>
          <div className='lg:flex justify-center items-center lg:mt-10'>
              <div className='mt-10 lg:mt-0 flex'>
                  <div className='w-full'>
                      <div className='sm:flex justify-center sm:space-x-10 md:space-x-10'>
                          <div className='py-4'>
                              <h2 className='font-semibold pl-6'>Features</h2>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Expert Water System Repair</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Professional Borehole Drillina</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Custom Pool Construction</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>water machines</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Reliable Water Machine Sales</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Water treatment</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Ongoing Support</h4>
                              </div>
                          </div>
                          <div className='py-4'>
                              <h2 className='font-semibold pl-6'>Benefits</h2>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Increased Water Efficiency</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Improved Water Quality</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Enhanced Property Value</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Quality and long lasting machines</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Reduced Water Bills</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Clean water for your health</h4>
                              </div>
                              <div className='flex items-center space-x-2 px-1 py-1'>
                                  <div className='border-2 relative border-black p-[3px] rounded-full w-fit ' style={{ borderColor: appColor.primaryBgColor }}>
                                      <div className='border-2 relative border-black p- rounded-full w-[1px] h-[1px] ' style={{ borderColor: appColor.primaryBgColor }} />
                                  </div>
                                  <h4>Sustained Partnership</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='flex justify-center mt-10 lg:mt-0 lg:ml-10'>
                  <div className="w-full md:w-[500px] lg:w-[400px]">
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
                                  <div className='relative w-full h-[300px]'>
                                      <Image src={image.image} alt="" layout='fill' objectFit='cover' />
                                  </div>
                              </SwiperSlide>
                          ))}
                      </Swiper>
                  </div>
              </div>
        </div>
    </div>
  )
}
