import React , {useState} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

import './Resume.css'
import Accordion from './Accordion';
export default function Resume() {
    const [btn1 , setbtn1] = useState(true);
    const [btn2 , setbtn2] = useState(false);
    const [btn3 , setbtn3] = useState(false);
    const [btn4 , setbtn4] = useState(false);
    const [btn5 , setbtn5] = useState(false);
    const updbtn1 = () => {
        setbtn1(true)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        setbtn5(false)
       
    }
    const updbtn2 = () => {
        setbtn1(false)
        setbtn2(true)
        setbtn3(false)
        setbtn4(false)
        setbtn5(false)
    }
    const updbtn3 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(true)
        setbtn4(false)
        setbtn5(false)
    }
    const updbtn4 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(true)
        setbtn5(false)
    }
    const updbtn5 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        setbtn5(true)
       
    }

    const accordionData = [
        {
          title: 'Operations Program Manager 2021 – 2022',
          content: (
            <p>
              <strong>Project Scope Statement:</strong> Amazon Australia and Singapore Quality Improvement Initiative
              <br />
              <strong>Objective:</strong> To establish a dedicated quality team for Amazon's Australia and Singapore business units by the end of Q2 2021 to enhance customer satisfaction through effective problem resolution and quality improvement mechanisms.
              <br />
              <strong>Scope:</strong>
              <ul>
                <li>Defect Reduction: Improve CSAT score and achieve a 6.00% reduction.</li>
                <li>Compliance Error Reduction: Decrease compliance errors to a target of 1.00%.</li>
                <li>
                  360-Degree Improvement Plan:
                 
                </li>
                <li>Implement a comprehensive plan encompassing:</li>
                    <li>Enhanced global training programs.</li>
                    <li>Reduced NH support and improved RAMP plan.</li>
                    <li>Establishment of a Quality Audit and Compliance Team.</li>
                    <li>Operational optimization through data-driven insights and analysis.</li>
              </ul>
              <strong>Key Stakeholders:</strong> Operations Program Manager, Data Analytics, CS Country Leader, Quality Audit team, Global Training team, Workflow and Capacity Planning.
              <br />
              <strong>Methodology used:</strong> Hybrid (Waterfall & Agile)
              <br />
              <strong>My Role:</strong> Operations Program Manager
              <br />
              <strong>Artifacts:</strong> Project Charter, Quality Management Plan, Progress Tracking Dashboards, Stakeholder Communication Plan, Risk Management Plan, Resource Allocation Documents
              <br />
              <strong>Tools:</strong> Amazon Redshift, Tableau, Quick Sight, MS Office suite, Microsoft Power BI, SharePoint, Galaxia, VBA.
              <br />
              <strong>Results:</strong>
              <ul>
                <li>Overall CSAT(RAP) score improved by 103 bps in AU and 136 bps in SG.</li>
                <li>Compliance red flags reduced by 129 bps in 2022.</li>
                <li>NH Ramp curve reduced to 35 days from 42, improving by 19.04%</li>
              </ul>
            </p>
          ),
        },
        {
          title: 'IN Regulatory Escalations, Fraud Transactions and Gift Cards (Dec 2019 – 2021)',
          content: (
            <p>
              <strong>Project Scope Statement:</strong> The Amazon India REG(Regulatory Escalations and Grievance) team, a specialized unit in collaboration with the Customer Experience and Customer Service teams, is dedicated to resolving regulatory escalations related to Amazon Pay. The team manages 11 distinct skills, including Amazon Pay Fraud escalations with 24/7 coverage, three levels of RBI-mandated escalations, Utility Bill payments, and various cashback-related issues (LPA, bank, Apay cashbacks), Store Value Account, and Instant Bank discount issues. They aim to maintain a Service Level Agreement (SLA) of 90% and a 48-hour turnaround time. Additionally, the team addresses retro disbursement escalations, involving exceptional refunds approved by directors.
              <br />
              <strong>Scope:</strong>
              <ul>
                <li>Technical Support Team Setup: Establish a 24/7 live technical support team to collaborate with the Transaction and Risk Management team and the CERT (Finance Team). This team will handle fraud transactions, aiming to safeguard customer transactions with a 100% SLA and a target of 30 seconds response time, achieving an average call handling time of 3.4 minutes.</li>
                <li>Executive Customer Relations Specialists: Form a team of specialists to resolve grievance escalations, liaising with various organizational stakeholders. This team will strive to achieve a 100% SLA with a 48-hour turnaround time.</li>
                <li>Ticketing Escalation Mechanism: Implement a mechanism to support 32,000 Customer Service Associates and Amazon.in customers. This will involve handling escalations related to Apay Cashback, Gift Cards, Store Value issues, High-Frequency Contacts, LPA, Bank Cash backs, Instant Bank discounts and Retro disburse escalations with SLA of 90.00%.</li>
              </ul>
              <strong>Key Stakeholders:</strong> Program Manager, Sr Program Manager, Data Analyst, CXCS Director, Operations Manager, Subject matter experts, Legal consultants, Finance Manager, Workflow, Capacity Planning, Vendor Manager, TRMS Senior Manager, CERT Sr Manager.
              <br />
              <strong>Methodology used:</strong> Hybrid (Waterfall & Agile)
              <br />
              <strong>Artifacts:</strong> Project Charter, Service Level Agreement (SLA) Documents, Stakeholder Communication Plan, Training Materials, Risk Management Plan, Contingency Planning, Performance Metrics Dashboard, Recruitment and Staffing Plan, Process Documentation, Feedback and Evaluation Forms, Issue Tracking System, Knowledge Base and FAQ Documentation, Change Management Documents, Workforce Management Tools, Technology and Infrastructure Plan, Quality Assurance Guidelines.
              <br />
              <strong>Tools:</strong> Customer Relationship Management (CRM) Software(CSC), Microsoft Project, Issue Tracking Systems, Amazon Redshift, Tableau, Quick Sight, MS Office suite, Microsoft Power BI, SharePoint, Galaxia, VBA.
              <br />
              <strong>Results:</strong>
              <ul>
                <li>Led a cross-functional team at Amazon Customer Service with 4 SMEs and 28 associates, acting as the final escalation point for 11 business units.</li>
                <li>Achieved a remarkable 94.28% SLA in 2021, improving by 292 bps over 2020 and 365 bps over 2019, reflecting continuous project enhancement.</li>
                <li>Drove a 35.72% defect reduction by Q4 2021, saving $0.3 million, and received the "Toy Yoda" Award for innovative solutions in defect reduction and cost management.</li>
                <li>Streamlined Retro Disburse refund approvals, handling over 3,300 Director escalations and 52,000 India-specific exception requests, contributing to surpassing REG team's OP2 goals by 235 bps in 2021 and 451 bps in H1 2022, with a $3.8 million operational impact.</li>
              </ul>
            </p>
          ),
        },
        {
          title: 'Program Manager SWAT (Jan 2019 – Nov 2019)',
          content: (
            <p>
              <strong>Project Scope Statement:</strong> SWAT Team Initiative
              <br />
              <strong>Objective:</strong> To establish a special team named as SWAT (Special Weapons and Tactics) team, a proficient and agile unit capable of handling customer contacts across multiple Operational Units (OUs) - North America (NA), India (IN), and the United Kingdom (UK) - ensuring high-quality customer service during peak periods of volume volatility. The team should be able to achieve 20.00% positive variance in Quality CSAT(RAP) & Efficiency(CHT) score to the planned Weighted goal along with meeting the operational units agreed SLA’s.
              <br />
              <strong>Scope:</strong>
              <ul>
                <li>Team Composition: A dedicated team, including leadership and frontline associates, skilled in handling contacts for any OU during SLA risks/during the need for business.</li>
                <li>Operational Flexibility: Ability to swiftly adapt to real-time requirements, including movement between IN and NA.</li>
                <li>Quality and Efficiency: Surpass core team benchmarks in service quality and efficiency.</li>
              </ul>
              <strong>New Salary Structure for SWAT</strong>
              <br />
              <strong>SWAT Specific Rewards and Recognition</strong>
              <br />
              <strong>CS India SWAT specific scorecard for TMs and GrpMs</strong>
              <br />
              <strong>Deliverables:</strong>
              <ul>
                <li>A fully operational SWAT team capable of serving multiple OUs.</li>
                <li>Implementation of gamified training and strategic recruitment to enhance team agility and skill.</li>
                <li>A structured approach to manage and mitigate service disruptions during unplanned contact volume spikes.</li>
                <li>Achieve a 20.00% positive variance in Quality and efficiency to OP2 and 30.00% to core skill achieved.</li>
              </ul>
              <strong>Key Stakeholders:</strong> Program Manager, Data Analytics, Sr Program Manager, Quality Audit team, Global Training team, Workflow, Operational Leaders(B&M, VCS) and Capacity Planning.
              <br />
              <strong>Methodology used:</strong> Agile (Incremental Development)
              <br />
              <strong>My Role:</strong> Program Manager
              <br />
              <strong>Artifacts:</strong> Project Charter, Training and Development Plan, Recruitment Strategy, Operational Playbook, Performance Metrics and Dashboards, Stakeholder Communication Plan, Risk Management Plan, Change Management Strategy
              <br />
              <strong>Tools used:</strong> Customer Relationship Management (CRM) Software, Amazon Redshift, Tableau, Quick Sight, MS Office suite, Microsoft Power BI, SharePoint, Galaxia, VBA and Microstrategy.
              <br />
              <strong>Results:</strong>
              <ul>
                <li>Quality: By Q4 2019 SWAT team CSAT(RAP) at 79.44% was 273 bps favorable to skill achieved and 403bps favorable to Planned yearly goal with 36.00% Vol%.</li>
                <li>Cost: SWAT achieved a VCIPC was 24% lower than skill achieved, benefiting $0.2 M Operational Cost</li>
                <li>Efficiency: SWAT team CHT( Concurrent Handle time) was 424 bps favorable to Planned yearly goal and 512 bps favorable to skill achieved.</li>
                <li>Employee Satisfaction: SWAT team achieved employee satisfaction score (Amazon Connections) at 4.2/5 was 600 bps favorable to Skill achieved (3.6).</li>
              </ul>
            </p>
          ),
        },
      ];
      
      

   
    
    let inputStyle = {
           
            border: '1px solid black'
        
      };
    return (
        <div className = 'container'>
            <p className = 'aboutmehead'>Professional Journey</p>
            {/* <hr class="center-diamond"/> */}
            <div className = 'row'>
                {/* <div className = 'col-sm-1 sideicons'>
               
                </div> */}
                <div className = 'col-sm-3 box-sh'>
                    <div className = 'sideicons'>
                <ul className = 'sidebar-ul-icon'>
                            <li className = 'sidebar-liicon'><i class="fas fa-user-graduate"></i></li>
                            <li className = 'sidebar-liicon'><i class="fas fa-history"></i></li>
                            {/* <li className = 'sidebar-liicon'><i class="fas fa-laptop-code"></i></li> */}
                            {/* <li className = 'sidebar-liicon'><i class="fas fa-chart-bar"></i></li> */}
                            <li className = 'sidebar-liicon'><i class="fas fa-palette"></i></li>
                           
                        </ul>
                        <ul className = 'sidebar-ul'>
                            <li style = { btn1 ? {backgroundColor : ' #212529' , color : 'white'} : {backgroundColor : 'white' ,  color : ' #212529'}} className = 'sidebar-li' onClick = {updbtn1}>Education</li>
                            <li style = { btn2 ? {backgroundColor : ' #212529' , color : 'white'} : {backgroundColor : 'white' ,  color : ' #212529'}} className = 'sidebar-li' onClick = {updbtn2}>Experience</li>
                            {/* <li style = { btn3 ? {backgroundColor : ' #212529', color : 'white'} : {backgroundColor : 'white',  color : ' #212529'}} className = 'sidebar-li' onClick = {updbtn3}>Skills</li> */}
                            {/* <li style = { btn4 ? {backgroundColor : ' #212529', color : 'white'} : {backgroundColor : 'white',  color : ' #212529'}} className = 'sidebar-li' onClick = {updbtn4}>Projects</li> */}
                            <li style = { btn5 ? {backgroundColor : ' #212529', color : 'white'} : {backgroundColor : 'white',  color : ' #212529'}} className = 'sidebar-li' onClick = {updbtn5}>Interests</li>
                        </ul>
                        </div>
                </div>
                <div className = 'col-sm-9 resumebox'>
                    {
                        btn1 && <div className = 'button1data'>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  Master of Science in Project Management  <span><button className = 'buttonstyle1221'>2023</button></span></p>
                            <p className = 'instedu'>&nbsp;&nbsp;&nbsp;&nbsp;Missouri State University, Springfield MO</p>
                        </div>
                        <div className = 'resudiv1'>
                            <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Bachelor of Technology<span><button className = 'buttonstyle1221'>2014</button></span></p>
                            <p className = 'instedu'>&nbsp;&nbsp;&nbsp;&nbsp;National Institute of Technology Durgapur</p>
                        </div>
                        {/* <div className = 'resudiv1'>
                            <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Vishali (E.M) High School<span><button className = 'buttonstyle1221'>2009 - 2014</button></span></p>
                            <p className = 'instedu'>&nbsp;&nbsp;&nbsp;&nbsp;HIGH SCHOOL EDUCATION</p>
                        </div> */}
                    </div>
}
{
                    btn2 && 
                    <div className = 'button2data'>
                        
                        <div className = 'resudiv1'>

                        <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
                        {/* <Accordion items={accordionItems} /> */}
                            {/* <Accordion/> */}
                        

<br/>
                       
                        {/* <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Program Manager IN Regulatory Escalations & Gift Cards (Dec 2019 – 2021)
</p>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Program Manager SWAT (Jan 2019 – Nov 2019)</p>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; CS India & Network Programs</p>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Manager – IN Message Us Pilot team (Jan 2018 – Dec 2018)</p>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Manager – IN Mobile Returns Pilot team (Jun 2017 – Dec 2017)</p>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Team Lead – Amazon.com (Jun 2016 – May 2017)</p>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Associate, DART & Subject Matter Expert (Jul 2014 – Jun 2016)</p> */}

                        </div>
                       

                </div>
}
{
                    btn3 && 
                    <div className = 'button3data'>
                   <div className = 'row resudiv1'>
                        <div className = 'col-sm-6'>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  JavaScript</p>
                        <ProgressBar completed={70} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  PHP</p>
                        <ProgressBar completed={80} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  MySQL</p>
                        <ProgressBar completed={65} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; jQuery </p>
                        <ProgressBar completed={60} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Bootstrap </p>
                        <ProgressBar completed={80} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div>
                        <br/>
                                     </div>
                        <div className = 'col-sm-6'>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  ReactJS</p>
                        <ProgressBar  completed={85}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  Material UI</p>
                        <ProgressBar  completed={75}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  NodeJS</p>
                        <ProgressBar  completed={65}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  ExpressJS</p>
                        <ProgressBar  completed={60}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  MongoDB</p>
                        <ProgressBar  completed={60}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div>
                        
                        </div>
                   </div>
                </div>
}
{
                    btn4 && 

                    <div className = 'button4data'>
                      <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  User role based whatsapp & SMS campaign tool  <span><button className = 'buttonstyle122'>2020</button></span></p>
                            <p className = 'instedu prodata'> Developed role based whatsapp campaign tool using PHP which works by uploading bulk mobile numbers through excel file. (HTML, CSS, Bootstrap , JavaScript , jQuery , PHP, MySQL )</p>
                        </div>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Developer's management application (MERN stack) <span><button className = 'buttonstyle122'>2021</button></span></p>
                            <p className = 'instedu prodata'> Developed a user based login and dashboard management application which allows user to give a reviews to the developers (ReactJS , Material UI , NodeJS , ExpressJS , MongoDB)</p>
                        </div>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Personal Portfolio Website <span><button className = 'buttonstyle1221'>2021</button></span></p>
                            <p className = 'instedu prodata'> A personal portfolio website to showcase all my details and projects at one place (ReactJS , Bootstrap , NodeJS)</p>
                        </div>
                   </div>
}
{
                    btn5 &&
                    <div className = 'button5data'>
                    <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Teaching </p>
                            <p className = 'instedu'> Apart from being a tech enthusiast and a code writer , i also love to teach people what i know simply because i believe in sharing</p>
                        </div>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Music </p>
                            <p className = 'instedu'> Listening to soothing music is something i can never compromise with skimming through spotify's pop songs charts is at times the best stress reliever that i can get my hands on</p>
                        </div>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Competetive Gaming </p>
                            <p className = 'instedu'> I like to challenge my reflexes a lot while competeting in cricket , pushing the rank and having interactive gaming sessions excites me the most </p>
                        </div>
                </div>

                    }
                   
                  
                  
                   
                   
                </div>
            </div>
        </div>
    )
}
