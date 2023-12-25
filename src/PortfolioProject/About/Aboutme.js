import React from 'react'
import './Aboutme.css'
import sidebar from './sidebar.jpg'
import merncode from './merncode2.jpg' 
export default function Aboutme() {
    return (
        <div>
           
            <div className='container aboutsec' id = 'aboutid'>
            <p className = 'aboutmehead'>About me</p>
                <div className = 'row aboutrow' >
                    
                    <div className = 'col-sm-4 myinfo'>
                        
                        <div className = 'my-contact-info'>
                           
                            <div className = 'my-info'>
                            <img className = 'sidebarimg' src = {merncode} alt = 'coding image'></img>
                            </div>
                            <div className = 'mygoal'>
                                <p className = 'careerobj'>My Career Objective</p>
                                <p className = 'myobj'>
                                Amazon Ops veteran: Mastering Market Launches, Building Teams, Enhancing Performance. Ready for New Strategic Challenges
</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-sm-8'>
                       <p className = 'job-desc'>Leveraging over 9.0 years of experience at Amazon, including a pivotal role as Operations Program Manager for Australia & Singapore, I am
poised to excel in a Program Management role. With a Master’s in project management from MSU and a Bachelor's from NIT Durgapur, I
have a solid educational foundation complementing my practical expertise. My tenure at Amazon has been marked by successful market
launches, development of critical frameworks and teams, and significant performance improvements, demonstrating my adeptness in
stakeholder and people management. I am eager to apply this blend of skills and experience to drive innovative solutions and achieve
strategic objectives in a challenging new role. </p>
                           <br/><br/>
                           
                    </div>
                    <p className = 'highlights'>Here are few Highlights : </p>
                           <br/>
                           <div className = 'bullet-sec'>
                               <ul className = 'bullet-ul'>
                                   <li className = 'bullet-list'>	Leadership Excellence: Outstanding Leader of the Year (2020 & 2021)</li>
                                   <li className = 'bullet-list'>	Team Performance: Gold Team Lead Award (2017 Peak Season)
Level
</li>
                                   <li className = 'bullet-list'>	Process Optimization: Toy Yoda Award (Q4 2019, Streamlining employee contract extensions procedure)</li>
                                   <li className = 'bullet-list'>People Management: 7x People's Manager Award (2017-2021)</li>
                                   <li  className = 'bullet-list'>
                                   	Business Impact: Business Enabler Award (improved REG performance and DPMO reduction)</li>
                                   <li className = 'bullet-list'>	Superheaded the project team for Amazon Customer Service, resolving complex regulatory and customer escalation issues, achieving an SLA of 94.28% in 2021</li>
                                   <li className = 'bullet-list'>	Championed a 35.72% defect reduction by Q4 2021, saving $0.3 million and earning the "Toy Yoda" Award.</li>
                                   <li className = 'bullet-list'>	Designed and implemented the SWAT Program, scaling the team from 36 to 1500 across 16 locations, surpassing core team benchmarks in quality and efficiency.</li>
                                   <li  className = 'bullet-list'>Developed a real-time illness dashboard during COVID, saving $0.45 million and reducing SLA breaches by 10%.</li>
                                   <li  className = 'bullet-list'>	Led the CS India Attrition team, reducing attrition rates and saving $1.7 million in retention costs.</li>
                                   <li  className = 'bullet-list'>	Streamlined Retro Disburse refund approvals, resolving over 3,300 escalations and contributing to surpassing REG team's OP2 goals with a $3.8 million impact.</li>
                                   <li  className = 'bullet-list'>Managed the "Loss of Production Hours" metric, contributing to a $6.61 million cost reduction and boosting CSA production by 15 minutes.</li>
                                   <li  className = 'bullet-list'>	Achieved a 64% reduction in Missed Default Time per CSA, setting a new national benchmark for CSA performance.</li>
                               </ul>
                           </div>
                </div>
                
            </div>
            
        </div>
        
    )
}
