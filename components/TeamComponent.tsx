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
              <TeamMemberCard name="Emmanuel uzoezie" image="/founder.png" title="Founder & CEO" about="Emmanuel’s passion for water solutions led him to start Volorole Water Solution. He’s the visionary who drives the company forward. He loves reading, exercise, swimming and football"/>
              <TeamMemberCard name="Okwudili uzochukwu" image="/founder.png" title="Head of Pools and Water Treatment" about="Emmanuel’s passion for water solutions led him to start Volorole Water Solution. He’s the visionary who drives the company forward. He loves reading, exercise, swimming and football"/>
              <TeamMemberCard name="Danny Mekwunye" image="/founder.png" title="Head of Borehole Drilling" about="Danny’s expertise in borehole drilling is unmatched. He’s the go-to guy for all your borehole needs. He loves playing soccer and reading technical books"/>
        </div>
    </div>
  )
}

export default TeamComponent