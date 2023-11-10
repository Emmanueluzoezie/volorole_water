import Image from 'next/image'
import React from 'react'
import { appColor } from './AppColor'

type Props ={
  image: string,
  name: string,
  about: string,
  title: string,
}

const TeamMemberCard = ({ image, name, about, title }: Props) => {
  return (
    <div className='md:w-[600px] lg:w-[50%] xl:w-[40%] py-8 md:px-8'>
      <div className='flex flex-col md:flex-row items-center'>
        <Image src={image} className='w-[170px] rounded-md h-[170px] md:w-[180px] md:h-[180px]' width={100} height={100} alt="" />
        <div className='text-center md:text-left md:pl-[14px]'>
          <h2 className='font-[600] text-[22px] capitalize'>{name}</h2>
          <h2 className='font-[500] text-[18px]' style={{color: appColor.primaryBgColor}}>{title}</h2>
          <p className='text-[15px] md:mt-6'>{about}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard