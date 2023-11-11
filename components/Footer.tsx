import Link from 'next/link'
import React from 'react'
import { MdWaterDrop } from 'react-icons/md'
import { appColor } from './AppColor'

const Footer = () => {
  return (
    <div className='text-white p-[20px]' style={{backgroundColor: appColor.footBgColor}}>
      <div className='flex items-center mb-6'>
        <div className='w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] flex items-center rounded-full' style={{ backgroundColor: appColor.primaryBgColor }}>
          <MdWaterDrop className='text-white ml-1 text-[20px] lg:text-[30px]' />
        </div>
        <div className='flex items-center ml-[-14px] lg:ml-[-24px]' style={{ color: appColor.primaryBgColor }}>
          <h1 className='text-[20px] lg:text-[30px] font-extrabold text-white'>V</h1>
          <h3 className='pt-1 font-extrabold text-[14px]'>OLOROLE</h3>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-start'>
        <div className='w-[50%] md:w-[300px] my-6 mt-4 md:-mt-0'>
          <h1 className='font-[500] text-[17px] '>Pages</h1>
          <div className='mt-1'>
            <Link href="/" className='block text-[16px] footer_item'>Home</Link>
            <Link href="/service/services" className='block text-[16px] footer_item'>Services</Link>
            <Link href="/about" className='block text-[16px] footer_item'>About</Link>
            <Link href="/contact" className='block text-[16px] footer_item'>Contact</Link>
          </div>
        </div>
        <div className='mt-4 md:mt-0 w-[50%] md:w-[300px] my-6'>
          <h1 className='font-[500] text-[17px]'>Services</h1>
          <div className='mt-1'>
            <Link href="/service/borehole" className='block text-[16px] footer_item'>Borehole Drilling</Link>
            <Link href="/service/pools" className='block text-[16px] footer_item'>Pool Construction</Link>
            <Link href="/service/machines" className='block text-[16px] footer_item'>Water Machines</Link>
            <Link href="/service/farting" className='block text-[16px] footer_item'>Water farting</Link>
            <Link href="/service/treatment" className='block text-[16px] footer_item'>Water Treatment</Link>
            <Link href="/service/solutions" className='block text-[16px] footer_item'>Water problem</Link>
          </div>
        </div>
        <div className='mt-4 md:mt-0 w-[50%] md:w-[300px] my-6'>
          <h1 className='font-[500] text-[17px]'>Support</h1>
          <div className='mt-1'>
            <Link href="/faq" className='block text-[16px] footer_item'>FAQs</Link>
            <Link href="/service/pools" className='block text-[16px] footer_item'>Email</Link>
          </div>
        </div>
        <div className='mt-4 md:mt-0 w-[50%] md:w-[300px] my-6'>
          <h1 className='font-[500] text-[17px]'>Socails</h1>
          <div className='mt-1'>
            <Link href="https://wa.me/+2349137436972" className='block text-[16px] footer_item'>WhatsApp</Link>
          </div>
        </div>
      </div>
      <h2 className='font-[600] mt-6 text-center'>©2023 Volorole Water Solutions</h2>
    </div>
  )
}

export default Footer