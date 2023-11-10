import Link from 'next/link'
import React, { useState } from 'react'
import { appColor } from './AppColor'
import { MdArrowDropDown, MdArrowDropUp, MdClose, MdMenu, MdWaterDrop } from "react-icons/md"
import {  } from "react-icons/fa"
import { useContextState } from '../context/AppContext'
import { useRouter } from 'next/router'

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(false);
    const { showMenu, setShowMenu, setShowContactsForNav, showContactsForNav } = useContextState()
    const router = useRouter()

    const handleLink = () => {
        setShowMenu(false)
        router.push("#team")
    }

    const closeNavbar = () => {
        if (showContactsForNav){
            setShowContactsForNav(false)
            setShowMenu(false)
        }
        else{
            setShowMenu(false)
        }
    }

    const handleMouseEnter = (item:string) => {
        setHoveredItem(true);
    };

    const handleMouseLeave = () => {
        setHoveredItem(false);
    };

  return (
    <header className='border-2 z-50 sticky top-0 px-4' style={{backgroundColor: appColor.secondaryBgColor}}>
          <nav className='flex items-center justify-between max-w-[1300px] mx-auto'>
              <Link href="/">
                  <div className='flex items-center'>
                    <div className='w-[50px] h-[50px] flex items-center rounded-full' style={{backgroundColor: appColor.primaryBgColor}}>
                        <MdWaterDrop className='text-white ml-1 text-[28px]'/>
                    </div>
                    <div className='flex items-center ml-[-24px]' style={{color: appColor.primaryBgColor}}>
                        <h1 className='text-[32px] font-extrabold text-white'>V</h1>
                        <h3 className='pt-1 font-extrabold'>OLOROLE</h3>
                    </div>
                  </div>
              </Link>

              <ul className='flex items-center space-x-8 py-4 md:py-0'>
                  <li className='hidden md:block hover_item font-semibold hover:font-bold relative py-[16px] md:py-[20px]'
                      onMouseEnter={() => handleMouseEnter("contact us")}
                      onMouseLeave={handleMouseLeave}>
                        <div className='flex cursor-pointer'>
                            <h2 className='hidden md:flex px-[10px]' 
                                >Service</h2>
                            {hoveredItem ?
                                <MdArrowDropUp className='text-2xl' />
                                :
                                <MdArrowDropDown className='text-2xl' />
                            }
                        </div>

                      {hoveredItem &&
                            <div className='capitalize absolute top-[50px] font-semibold left-[-200%] right-[-10%] w-[300px]' style={{ backgroundColor: appColor.secondaryBgColor}}>
                              <div className='p-3'>
                                  <Link className='' href="/">
                                      <button className='p-2 px-[20px] border-b-2 w-full hover_item hover:font-bold' >Borehole Drilling</button>
                                  </Link>
                                  <Link href="https://wa.me/+2349121271988">
                                      <button className='p-2 px-[20px] border-b-2 w-full hover_item hover:font-bold' >Water machines</button>
                                  </Link>
                                  <Link href="https://wa.me/+2349121271988">
                                      <button className='p-2 px-[20px] border-b-2 w-full hover_item hover:font-bold' >swimming pool construction</button>
                                  </Link>
                                  <Link href="https://wa.me/+2349121271988">
                                      <button className='p-2 px-[20px] border-b-2 w-full hover_item hover:font-bold' >Water Treatment</button>
                                  </Link>
                                  <Link href="https://wa.me/+2349121271988">
                                      <button className='p-2 px-[20px] border-b-2 w-full hover_item hover:font-bold' >Water farting</button>
                                  </Link>
                                  <Link href="https://wa.me/+2349121271988">
                                      <button className='p-2 px-[20px] border-b-2 w-full hover_item hover:font-bold' >Repairs & Maintenance</button>
                                  </Link>
                              </div>
                            </div>
                        }
                  </li>
                  <li className='hover_item font-semibold hover:font-bold cursor-pointer hidden md:block' onClick={handleLink}>Team</li>
                  <li className='hover_item font-semibold hover:font-bold cursor-pointer hidden md:block'>Contact us</li>
                  <li className='hover_item font-semibold hover:font-bold cursor-pointer hidden md:block'>About us</li>

                <div className='md:hidden text-3xl cursor-pointer'>
                    {showMenu?
                        <MdClose onClick={closeNavbar}/>
                        :
                        <MdMenu onClick={() => setShowMenu(true)} />
                    }
                </div>
              </ul>
        </nav>
    </header>
  )
}

export default Navbar