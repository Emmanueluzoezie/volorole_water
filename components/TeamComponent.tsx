import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const TeamComponent = () => {
  return (
    <div className='py-4 md:py-10' id='team'>
        <div className='pt-[28px] flex justify-center'>
            <h2 className='text-[26px] font-[600] md:text-[40px]'>Our Team</h2>
        </div>
        <div className='px-6 md:px-10 pb-6 text-center'>
            <p>Meet the Water Wizards. The Skilled Volorole Water Solution Experts Behind Our Success</p>
        </div>
          <div className='px-6 flex flex-wrap justify-center'>
              <TeamMemberCard name="Emmanuel uzoezie" image="/team/founder.png" title="Founder & CEO" about="Emmanuel’s passion for water solutions led him to start Volorole Water Solution. He’s the visionary who drives the company forward. He loves reading, exercise, swimming and football"/>
        <TeamMemberCard name="Okwudili uzochukwu" image="/team/watert.jpeg" title="Head of Pools and Water Treatment" about="Okwudili's expertise lies in construction, pools, water treatment, and fountains. He has two decades of experience. In addition to his professional pursuits, he enjoys playing soccer and swimming as well."/>
        <TeamMemberCard name="Danny Mekwunye" image="/team/boreholehead.jpeg" title="Head of Borehole Drilling" about="Danny is a passionate professional who has acquired adequate experience spanning over a decade on exploring and harnessing groundwater for domestic and commercial purposes."/>
        </div>
    </div>
  )
}

export default TeamComponent