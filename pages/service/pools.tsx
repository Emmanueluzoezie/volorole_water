import Head from 'next/head'
import React from 'react'
import MobileNavbar from '../../components/MobileNavbar'
import Navbar from '../../components/Navbar'
import { useContextState } from '../../context/AppContext'

const Pools = () => {
    const { showMenu } = useContextState()

    return (
        <>
            <Head>
                <title>Volorole</title>
                <meta name="description" content="Volorole website for pools" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../public/volorolelogos.png" />
            </Head>

            <div className='page_body'>
                <Navbar />
                {showMenu &&
                    <div className='fixed z-50 w-full md:hidden'><MobileNavbar /></div>
                }
                <div>Borehole</div>
            </div>
        </>
    )
}

export default Pools