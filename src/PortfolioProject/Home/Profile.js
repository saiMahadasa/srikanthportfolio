import React from 'react'
import Navbar from './Navbar'
import "./Profile.css"
import resume from './srikanth-resume.pdf'

export default function Profile() {
    return (
        <div className = 'profile-container'>
            
           <Navbar/>
           <div className = 'container-fluid profilesec'>
            <div className = 'row'>
                <div className = 'col-sm-7 prof-bio'>
                
                    <p className = 'prof-role'>Operations Program Manager </p>
                    <p className = 'prof-desc'>Transforming Operations with Innovation, Efficiency, and Excellence!</p>
                    <br/>
                    
                    <p className = 'highlights'>My Certifications : </p>
                          
                           <div className='flexprofile'>
                           <div className = 'bullet-sec'>
                               <ul id='flexx' className = 'bullet-ul'>
                                    <div>
                                    <li className = 'bullet-list1'>Project Management Professional</li>
                                   <li className = 'bullet-list1'>Certified MicroStrategy Expert</li>
                                   <li className = 'bullet-list1'>Certified Scrum Master (CSM)</li>
                                    </div>
                                   
                                        <div>
                                        <li className = 'bullet-list1'> SIX Sigma Green Belt</li>
                                   <li  className = 'bullet-list1'>
                                   Cisco Certified Data Analytics Essentials</li>
                                        </div>
                                  
                                
                                  
                               </ul>
                           </div>
                           <div>
                          
                           </div>
                           </div>
                    <div className = 'btn-sec'>
                        
                    </div>
                    
                </div>
                <div className = 'col-sm-5'>
                   <div className = 'profpic-parent'>
                       <img className = 'profpic' src = 'https://konaseemaphotographers.com/assets/srikanthdp.png' 
                       alt = 'Sai Srikanth Panidepu'></img>
                   </div>
                   <br/>
                   <ul className = 'btn-parent' id ='btnresumeid'>
                            <li className = 'btn-item'><a href ={resume}><button className = 'buttonstyle1'>Resume</button></a></li>
                            <li className = 'btn-item'><a href = '#contactid'><button className = 'buttonstyle'>Hire me</button></a></li>
                        </ul>
                </div>
            </div>
           </div>
        </div>
        
    )
}
