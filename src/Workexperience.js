import React from 'react';
import "./Workexperience.css";

import protechsoft from './Photos/ProtechSoft.jpg'
function Workexperience() {
  return (<>


    <div className='mainheading d-flex flex-column align-items-center'>
        <b>Professional Experience</b>
        </div>

        <section  className='bgNew'>
  <div class="container py-5">
    <div class="main-timeline-2">
      <div class="timeline-2 left-2" data-aos="flip-left" data-aos-duration="3000" data-aos-easing="ease-in-sine">
        <div class="card">
          <img src={protechsoft} class="card-img-top"
            alt="Protechsoft Technologies Pvt. Ltd." style={{height:80, width:200}}/>
          <div class="card-body p-4">
            {/* <h4 class="fw-bold mb-4">Protechsoft Technologies</h4> */}
              
            <p class="text-muted mb-4"><i class="far fa-calendar" aria-hidden="true"></i> 2018 - 2022</p>
            
            <p class="mb-0">
                            <h5><b>Software Testing Engineer</b></h5>

            <ul>
          <li>Understanding the Requirements and Functional Specifications of the application.</li>
          <li>Prepared and Executed Test Cases</li>
          <li>Defect Reporting and Tracking using Git Hub.</li>
          <li>Involved in participation of regular weekly project status meetings to discuss the risks </li> 
          <li>Involved in ongoing projects with Business Analyst, Developers, Teammates and Team Lead.</li>

          <li>Extensively performed Manual Testing process to ensure the quality of the software.</li>
          </ul>
              </p>
          </div>
        </div>
      </div>
      <div class="timeline-2 right-2 " data-aos="flip-right" data-aos-duration="3000" data-aos-easing="ease-in-sine">
        <div class="card">
          <img src="https://www.zohowebstatic.com/sites/default/files/zoho-logo-zh-2x.png" class="card-img-top"
            alt="Zoho Corporations" style={{height:85, width:200}}/>
          <div class="card-body p-4">
            {/* <h4 class="fw-bold mb-4">Zoho Corporations</h4> */}
            <p class="text-muted mb-4"><i class="far fa-calendar" aria-hidden="true"></i> 2022 - Till Present</p>
            <p class="mb-0">
            <h5><b>Software Developer</b></h5>

            <ul>


<li>Understanding the Requirements and Functional Specifications of the application.</li>
<li>Develop new components based on design specs.</li>
<li>Work independently and write maintainable code.</li>
<li>Understand existing code and suggest optimization in terms of functionality and performance. </li> 
<li>Involved in ongoing projects with Business Analyst, Developers, Teammates and Team Lead.</li>
<li>Work on client frameworks for caching and develop reusable components.</li>
</ul></p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section> 
       

 
 </>  
  )
}

export default Workexperience

