import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { boreholeImage } from '../utilies/imageData';
import { appColor } from './AppColor';

const MissionComponent = () => {
  return (
    <div className=' p-[20px] py-10 md:py-32' style={{backgroundColor: appColor.lightPrimaryColor}}>
        <div className='max-w-[1150px] mx-auto md:flex items-center md:space-x-5'>
            <div className='pb-10 md:pb-0'>
                  <h2 className='text-center text-[24px] font-semibold md:text-[32px]  lg:text-[38px]'>Mission Statement</h2>
                {/* <p className='md:text-[22px]'>We provide water solutions that matter. Our team or skilled professionals is dedicated to delivering quality and reliable services. From fixing water machines to drilling boreholes and building swimming pools, we've got you covered. At volorole Water Solution. we value our customers and aim to exceed their execrations.</p> */}
                  <p className='md:text-[20px]'>Discover a world of water solutions that truly matter at Volorole Water Solutions. Our team of skilled professionals is dedicated to delivering top-notch services, ensuring you have access to reliable and high-quality water solutions and water machines.</p>

                  <h2 className='mt-4 text-[20px] md:text-[24px] font-[500]'>What sets us apart:</h2>
                  <ul>
                      <li className='py-2'><span className="highlight">Expertise:</span> Our team is comprised of industry experts who excel in fixing water machines, drilling boreholes, and constructing stunning swimming pools.</li>
                      <li className='py-2'><span className="highlight">Quality Assurance:</span> We take pride in our commitment to providing nothing but the best. Our services are synonymous with quality and reliability.</li>
                      <li className='py-2'><span className="highlight">Quality Water machines:</span>Experience the pinnacle of performance with our quality machines, meticulously crafted for lasting quality and unparalleled reliability.</li>
                      <li className='py-2'><span className="highlight">Comprehensive Solutions:</span> Whether you need a quick repair, a borehole for sustainable water access, or a beautifully crafted swimming pool, Volorole Water Solutions has you covered.</li>
                  </ul>
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
                              <div className='relative w-full h-[400px]'>
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

export default MissionComponent