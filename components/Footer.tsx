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
      <div className='md:flex flex-wrap justify-center items-start'>
        <div className='border-2 md:w-[300px] md:my-6 md:-mt-0'>
          <h1 className='font-semibold text-[18px] '>Pages</h1>
          <div className='mt-1 pl-2'>
            <Link href="/" className='block text-[16px] footer_item'>Home</Link>
            <Link href="/service/services" className='block text-[16px] footer_item'>Services</Link>
            <Link href="/about" className='block text-[16px] footer_item'>About</Link>
            <Link href="/contact" className='block text-[16px] footer_item'>Contact</Link>
          </div>
        </div>
        <div className='mt-4 md:mt-0 border-2 md:w-[300px] md:my-6'>
          <h1 className='font-semibold text-[18px]'>Services</h1>
          <div className='mt-1 pl-2'>
            <Link href="/service/borehole" className='block text-[16px] footer_item'>Borehole Drilling</Link>
            <Link href="/service/pools" className='block text-[16px] footer_item'>Pool Construction</Link>
            <Link href="/service/machines" className='block text-[16px] footer_item'>Water Machines</Link>
            <Link href="/service/farting" className='block text-[16px] footer_item'>Water farting</Link>
            <Link href="/service/treatment" className='block text-[16px] footer_item'>Water Treatment</Link>
            <Link href="/service/solutions" className='block text-[16px] footer_item'>Water problem</Link>
          </div>
        </div>
        <div className='mt-4 md:mt-0 border-2 md:w-[300px] md:my-6'>
          <h1 className='font-semibold text-[18px]'>Support</h1>
          <div className='mt-1 pl-2'>
            <Link href="/faq" className='block text-[16px] footer_item'>FAQs</Link>
            <Link href="/service/pools" className='block text-[16px] footer_item'>Email</Link>
          </div>
        </div>
        <div className='mt-4 md:mt-0 border-2 md:w-[300px] md:my-6'>
          <h1 className='font-semibold text-[18px]'>Socails</h1>
          <div className='mt-1 pl-2'>
            <Link href="https://wa.me/+2349121271988" className='block text-[16px] footer_item'>WhatsApp</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer