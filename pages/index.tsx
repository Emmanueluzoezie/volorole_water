import Head from 'next/head'
import Navbar from '../components/Navbar'
import { FirstComponent } from '../components/FirstComponent'
import { useContextState } from '../context/AppContext'
import MobileNavbar from '../components/MobileNavbar'
import ServiceComponent from '../components/ServiceComponent'
import Footer from '../components/Footer'
import { HomeArticleComponent } from '../components/HomeArticleComponent'
import TeamComponent from '../components/TeamComponent'
import MissionComponent from '../components/MissionComponent'

export default function Home() {
  const { showMenu } = useContextState()

  return (
    <>
      <Head>
        <title>Volorole</title>
        <meta name="description" content="Volorole website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/volorolelogos.png" />
      </Head>
      
      <div className='page_body'>
        <Navbar />
        {showMenu && 
          <div className='fixed z-50 w-full md:hidden'><MobileNavbar /></div>
        }
        <FirstComponent />
        <ServiceComponent />
        <MissionComponent />
        <HomeArticleComponent />
        <TeamComponent />
        <Footer />
      </div>
    </>
  )
}
