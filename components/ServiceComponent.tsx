import React from 'react'
import ServiceItem from './ServiceItem'
import { boreholeImage, differentMachineImage, maintainceImage, swimmingPoolsImage } from '../utilies/imageData';

const ServiceComponent = () => {
  return (
    <div id='service' className=' px-4'>
        <div className='pt-[28px] flex justify-center'>
            <h2 className='text-[30px] font-bold md:text-[40px]'>Our services</h2>
        </div>
        <div className='md:flex flex-wrap justify-center'>
          <ServiceItem images={boreholeImage} title="Borehole Drilling" description="Unlocking the Depths of Clean Water: We specialize in drilling exceptional boreholes to quench your water needs. Our dedication to quality and expertise ensures a reliable source of pure, crystal-clear water for your home or business." />

          <ServiceItem images={swimmingPoolsImage} title="Crafting you dream Pool" description="Dive into luxury with our exquisite swimming pools! We create dreamy aquatic escapes, tailored to your vision. Our expert team transforms your backyard into an oasis of relaxation and recreation. Discover the ultimate in pool perfection with us"/>

          <ServiceItem images={maintainceImage} title="Water care and maintenance " description="Your Water, Our Priority: We provide top-tier maintenance services for your boreholes, swimming pools, and water machines. Keeping your water sources and systems in peak condition is our commitment. Trust us to ensure the flow never stops" />

        <ServiceItem images={differentMachineImage} title="Water Machines" description="Powering Your Water World. We design and deliver top-tier water machines, from submersible to surface pumps, pool equipment, generators, and more. Our cutting-edge solutions ensure a seamless flow of water, meeting every need and exceeding expectations" />
        </div>
    </div>
  )
}

export default ServiceComponent