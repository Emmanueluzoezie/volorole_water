import React, { useState } from 'react'
import { FaCaretDown, FaSortDown, FaSortUp } from 'react-icons/fa'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { useContextState } from '../context/AppContext'
import { machineTypes } from '../utilies/data'
import { appColor } from './AppColor'
import ServiceComponent from './ServiceComponent'
import SingleMachine from './SingleMachine'

const MachinesComponent = () => {
    const [showMachineType, SetShowMachineType] = useState(true)
    const {machineType, setMachineType} = useContextState()

    const handleMachineTypeList = (click: string) => {
        setMachineType(click)
        SetShowMachineType(false)
    } 

  return (
    <div className='py-4 relative'>
          <div className='px-3 md:px-6 max-w-[1000px] mx-auto sticky top-[65px] py-3 z-30 bg-white'>
            <div className='border-2 flex items-center rounded-md relative' style={{ borderColor: appColor.primaryBgColor }}>
                  <input className='flex-1 text-[15px] md:text-[18px] p-2 outline-none' type="text" placeholder="Type of Machine" />
                <div>
                    <div className='flex items-center cursor-pointer py-3 md:px-3 text-white rounded-r-md' onClick={() => SetShowMachineType(!showMachineType)} style={{backgroundColor: appColor.primaryBgColor}}>
                        <h2 className='font-[600] text-[13px] md:text-[18px] capitalize px-1'>{machineType}</h2>
                        {showMachineType ?
                              <FaSortUp className='text-md ' />
                            :
                              <FaSortDown className='text-md' />
                        }
                    </div>
                    {showMachineType &&
                          <div className='absolute bg-white p-2 right-0 shadow-lg'>
                            {machineTypes.map((item) => (
                                <div key={item.id} className="hover:bg-gray-200 cursor-pointer p-1 " onClick={() => handleMachineTypeList(item.name)}>
                                    <h2 className='p-1 font-[600] text-[13px] md:text-[17px] '>{<h2>{item.name}</h2>}</h2>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
        <div className='px-10 flex flex-wrap justify-center'>
            <SingleMachine />
            <SingleMachine />
            <SingleMachine />
            <SingleMachine />
            <SingleMachine />
            <SingleMachine />
        </div>
    </div>
  )
}

export default MachinesComponent