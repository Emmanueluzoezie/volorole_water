import Head from 'next/head'
import React from 'react'
import Footer from '../../components/Footer'
import MachinesComponent from '../../components/MachinesComponent'
import MobileNavbar from '../../components/MobileNavbar'
import Navbar from '../../components/Navbar'
import { useContextState } from '../../context/AppContext'

export default function Machines() {
    const { showMenu } = useContextState()

    return (
        <>
            <Head>
                <title>Volorole</title>
                <meta name="description" content="Volorole website for machines" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../public/volorolelogos.png" />
            </Head>

            <div className='page_body'>
                <Navbar />
                {showMenu &&
                    <div className='fixed z-50 w-full md:hidden'><MobileNavbar /></div>
                }
                <MachinesComponent />
                <Footer />
            </div>
        </>
    )
}
