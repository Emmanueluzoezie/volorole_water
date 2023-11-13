import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { useContextState } from '../context/AppContext'
import { appColor } from './AppColor'

const MobileNavbar = () => {
    const { showMoreServiceNav, setShowMoreServiceNav, setShowMenu } = useContextState()
    const router = useRouter()

    const handleLink =(click: string) => {
        if (showMoreServiceNav){
            setShowMoreServiceNav(false)
        }
        setShowMoreServiceNav(false)
        setShowMenu(false)
        router.push(click)
    }

  return (
      <div className='' style={{ backgroundColor: appColor.secondaryBgColor }}>
          <ul className='pb-2 px-4 font-semibold'>
              <li onClick={() => handleLink("/")} className='p-2 cursor-pointer border-[#4c661a] hover:border-b-2'>Home</li>
              <li className={`p-2 cursor-pointer border-[#4c661a] ${showMoreServiceNav ? "" : "hover:border-b-2 border-[#4c661a]"}}`} onClick={() => setShowMoreServiceNav(!showMoreServiceNav)}>
                <div className='flex items-center justify-between'>
                    <h2 className='w-full' >Service</h2>
                      {showMoreServiceNav ?
                        <MdArrowDropUp className='text-4xl' />
                        :
                        <MdArrowDropDown className='text-4xl' />
                    }
                </div>
                  {showMoreServiceNav &&
                <div className=' pl-[60px] capitalize'>
                    <Link href="/service/borehole">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Borehole Drilling</h2>
                    </Link>
                    <Link href="/service/machines">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Water machines</h2>
                    </Link>
                          <Link href="/service/pools&treatment">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Pool construction & water treatment</h2>
                    </Link>
                    {/* <Link href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Water farting construction</h2>
                    </Link> */}
                    <Link href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Water Treatment</h2>
                    </Link>
                    <Link href="">
                        <h2 className={`hover_item w-fit hover:border-b-2 py-3`}>Repairs & Maintenance</h2>
                    </Link>
                </div>
                }
            </li>
            <li onClick={() => handleLink("#team")} className='p-2 cursor-pointer border-[#4c661a] hover:border-b-2'>Team</li>
            <li onClick={() => handleLink("/contact")} className='p-2 cursor-pointer border-[#4c661a] hover:border-b-2'>Contact us</li>
            <li onClick={() => handleLink("/about")} className='p-2 cursor-pointer border-[#4c661a] hover:border-b-2'>About us</li>
        </ul>
        {/* <div className='px-6 pb-6 flex  items-center'>
            <button className='px-6 py-1 font-[600] text-white rounded-md' style={{backgroundColor: appColor.primaryBgColor}}>Sign up</button>
            <h2 className='px-4'>OR</h2>
              <button className='px-6 py-1 font-[600] text-white rounded-md border-2' style={{ borderColor: appColor.primaryBgColor, color: appColor.primaryBgColor }}>Login</button>
        </div> */}
      </div>
  )
}

export default MobileNavbar