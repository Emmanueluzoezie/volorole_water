import Link from 'next/link'
import React, { useState } from 'react'
import { appColor } from './AppColor'
import { MdArrowDropDown, MdArrowDropUp, MdClose, MdMenu } from "react-icons/md"
import {  } from "react-icons/fa"
import { useContextState } from '../context/AppContext'

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState("");
    const {showMenu, setShowMenu, } = useContextState()


    const handleMouseEnter = (item:string) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem("");
    };

  return (
    <header className='border-2 sticky top-0 px-4' style={{backgroundColor: appColor.secondaryBgColor}}>
          <nav className='flex items-center justify-between max-w-[1300px] mx-auto'>
              <Link href="/">
                  logo
              </Link>

              <ul className='flex items-center space-x-4'>
                  <li className='hidden md:block relative py-[16px] md:py-[20px]'
                      onMouseEnter={() => handleMouseEnter("contact us")}
                      onMouseLeave={handleMouseLeave}>
                        <div className='flex cursor-pointer'>
                            <h2 className='hidden md:flex px-[10px]' style={{ backgroundColor: appColor.primaryBgColor }} 
                                >Contact us</h2>
                            {hoveredItem ?
                                <MdArrowDropUp className='text-2xl' />
                                :
                                <MdArrowDropDown className='text-2xl' />
                            }
                        </div>

                      {hoveredItem === "contact us" &&
                            <div className='absolute top-[50px] left-[-60%] right-[-50%] w-fit' style={{ backgroundColor: appColor.secondaryBgColor}}>
                              <div className='p-3'>
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
                            </div>
                        }
                  </li>

                <div className='xl:hidden text-3xl cursor-pointer'>
                    {showMenu?
                        <MdClose onClick={() => setShowMenu(false)}/>
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