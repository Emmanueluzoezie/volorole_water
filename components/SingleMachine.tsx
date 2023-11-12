import Image from 'next/image'
import React from 'react'
import { submersibleImage } from '../utilies/imageData'
import { appColor } from './AppColor'

const SingleMachine = () => {
  return (
      <div className='m-[10px] w-[300px]'>
        <div>
            <div className='relative  h-[300px]'>
                  <Image src={submersibleImage[0].image} alt="" layout='fill' objectFit='contain' />
            </div>
            <div className='px-2'>
                <h2 className='line-clamp-2'>MIHSP Automatic Pressure Booster Water Pump (Multicolour/Copper Winding), 25X25 (0.5 HP FBA)</h2>
                <div>
                    <h2>#3,934</h2>
                </div>
            </div>
            <button className='w-full text-white py-2 font-[600] rounded-md' style={{backgroundColor: appColor.primaryBgColor}}>Add to cart</button>
        </div>
    </div>
  )
}

export default SingleMachine