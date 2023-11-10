import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { useContextState } from '../context/AppContext'
import { appColor } from './AppColor'

const MobileNavbar = () => {
    const { showContactsForNav, setShowContactsForNav, setShowMenu } = useContextState()
    const router = useRouter()

    const handleLink =() => {
        setShowMenu(false)
        router.push("#team")
    }

  return (
      <div className='' style={{ backgroundColor: appColor.secondaryBgColor }}>
          <ul className='pb-2 px-4 font-semibold'>
              <li className={`p-2 cursor-pointer border-[#4c661a] ${showContactsForNav ? "" : "hover:border-b-2 border-[#4c661a]"}}`} onClick={() => setShowContactsForNav(!showContactsForNav)}>
                <div className='flex items-center justify-between'>
                    <h2 className='w-full' >Service</h2>
                    {showContactsForNav ?
                        <MdArrowDropUp className='text-4xl' />
                        :
                        <MdArrowDropDown className='text-4xl' />
                    }
                </div>
                {showContactsForNav &&
                <div className=' pl-[60px] capitalize'>
                    <Link className={``} href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Borehole Drilling</h2>
                    </Link>
                    <Link className={``} href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Water machines</h2>
                    </Link>
                    <Link className={``} href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>swimming pool construction </h2>
                    </Link>
                    <Link className={``} href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Water farting</h2>
                    </Link>
                    <Link className={``} href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Water Treatment</h2>
                    </Link>
                    <Link className={``} href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Repairs & Maintenance</h2>
                    </Link>
                </div>
                }
            </li>
            <li onClick={handleLink} className='p-2 cursor-pointer border-[#4c661a] hover:border-b-2'>Team</li>
            <li className='p-2 cursor-pointer border-[#4c661a] hover:border-b-2'>Contact us</li>
            <li className='p-2 cursor-pointer border-[#4c661a] hover:border-b-2'>About us</li>
        </ul>
      </div>
  )
}

export default MobileNavbar