import Link from 'next/link'
import React from 'react'
import { useContextState } from '../context/AppContext'
import { appColor } from './AppColor'

export const FirstComponent = () => {
    const { showContacts, setShowContacts} = useContextState()

    const handleCloseOpenItem = () => {
        if(showContacts) {
            setShowContacts(false)
        }
    }

  return (
      <div className={`h-[600px] flex flex-col items-center justify-center border-b-2`} style={{ backgroundColor: appColor.primaryBgColor }} onClick={handleCloseOpenItem}>
          <div className='text-center max-w-[700px] mx-auto px-4'>
              <h1 className='font-bold text-[28px] md:text-[36px]'>Comprehensive Water Solutions</h1>
              <h2 className='text-[17px] md:text-[20px]'>where we turn your water-related dreams into reality. Our expert team specializes in a wide range of services, including water machine repair, borehole drilling, and stunning swimming pool construction. Whether you're facing water issues or seeking to create a luxurious aquatic paradise, we have the expertise and creativity to make it happen</h2>
              <div className='flex justify-center items-center pt-[50px]'>
                  <button className='p-2 px-[20px] z-50' style={{ backgroundColor: "#cefa82" }} onClick={() => setShowContacts(true)}>Contact us</button>
                  <h2 className='px-3'> OR</h2>
                  <button className='p-2 px-[20px] border-4' >Explore Services</button>
              </div>
        </div>
        {showContacts && 
            <div className='z-30 border-2 absolute flex flex-col p-4 rounded-xl' style={{backgroundColor: appColor.secondaryBgColor}}>
                <Link href="https://wa.me/+2349121271988">
                    <button className='p-2 px-[20px] border-4' >Explore Services</button>
                </Link>
                <button className='p-2 px-[20px] border-4' >Explore Services</button>
                <button className='p-2 px-[20px] border-4' >Explore Services</button>
            </div>
        }
    </div>
  )
}
