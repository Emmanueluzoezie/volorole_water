import Link from 'next/link'
import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { useContextState } from '../context/AppContext'
import { appColor } from './AppColor'

const MobileNavbar = () => {
    const { showContactsForNav, setShowContactsForNav } = useContextState()

  return (
      <div className='px-4' style={{ backgroundColor: appColor.secondaryBgColor }}>
        <ul className='text-center pb-2'>
            <li className='p-2 border-b-[3px]'>Find solution</li>
            <li className='p-2 border-b-[3px]'>Find solution</li>
              <li className='p-2 border-4' onClick={() => setShowContactsForNav(!showContactsForNav)}>
                <div className='flex items-center'>
                    <h2 className='w-full' >Contact us</h2>
                    {showContactsForNav ?
                        <MdArrowDropUp className='text-4xl' />
                        :
                        <MdArrowDropDown className='text-4xl' />
                    }
                </div>
                {showContactsForNav &&
                <div className='pt-3'>
                    <Link className='' href="https://wa.me/+2349121271988">
                        <button className='p-2 px-[20px] border-4 w-full' >Call</button>
                    </Link>
                    <Link href="https://wa.me/+2349121271988">
                        <button className='p-2 px-[20px] border-4 w-full' >Message on Whatsapp</button>
                    </Link>
                    <Link href="https://wa.me/+2349121271988">
                        <button className='p-2 px-[20px] border-4 w-full' >Send a mail</button>
                    </Link>
                </div>
                }
            </li>
        </ul>
      </div>
  )
}

export default MobileNavbar