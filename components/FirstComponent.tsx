import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useContextState } from '../context/AppContext'
import { appColor } from './AppColor'

export const FirstComponent = () => {
    const { showContacts, setShowContacts} = useContextState()
    const router = useRouter()

    const handleCloseOpenItem = () => {
        if(showContacts) {
            setShowContacts(false)
        }
    }

  return (
      <div className={`h-[600px] md:h-[700px] text-gray-50 flex flex-col items-center justify-center border-b-2`} style={{ backgroundColor: appColor.primaryBgColor }}>
          <div className='text-center max-w-[900px] mx-auto px-4'>
              <h1 className='font-bold text-[22px] md:text-[32px]'>Volorole Water Solutions, Your One stop to water services</h1>
              <h2 className='text-[16px] md:text-[20px] pt-3'>Where we turn your water-related dreams into reality. Our expert team specializes in a wide range of services, including water machine repair, borehole drilling, and stunning swimming pool construction. Whether you're facing water issues or seeking to create a luxurious aquatic paradise, we have the expertise and creativity to make it happen</h2>
              <div className='md:flex justify-center items-center pt-[50px] px-14 md:px-0 text-xl md:text-2xl font-bold'>
                  <Link href="/contact" className='w-full'>
                      <button className='p-2 px-[20px] rounded-md w-full' style={{ backgroundColor: appColor.lightPrimaryColor, color: appColor.primaryBgColor }}>Contact us</button>
                  </Link>
                  <h2 className='p-3 md:p-8'> OR</h2>
                  <Link href="#service" className='w-full'>
                    <button className='p-2 px-[20px] border-2 rounded-md w-full' >Explore Services</button>
                  </Link>
              </div>
        </div>
        {/* {showContacts && 
            <div className='z-30 border-2 absolute flex flex-col p-4 rounded-xl' style={{backgroundColor: appColor.secondaryBgColor}}>
                <Link href="https://wa.me/+2349121271988">
                    <button className='p-2 px-[20px] border-4' >Explore Services</button>
                </Link>
                <button className='p-2 px-[20px] border-4' >Explore Services</button>
                <button className='p-2 px-[20px] border-4' >Explore Services</button>
            </div>
        } */}
    </div>
  )
}


