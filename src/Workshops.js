import React from 'react'
import './Skills.css'

function Workshops() {
  return (
    <div>
        < div className='bgtwo'>    
        <div className='mainheading '>
        <b>Workshops Attended</b></div>
        <br/>
        <div className='container '>
            <div className='row'>
                
            <div className='col-12 col-md-4'>
           <h4 className='text-white'>Course Title</h4> 
            <div className='transparentbg  text-left mx-auto' data-aos="flip-left"      
            data-aos-easing="ease-out-cubic"
 data-aos-duration="3000">
                <p>RoboHack-In vspart</p>
                <p>Cyber Security & Malware</p>
                <p>Android Mobile Application Development</p>
                <p>Android Mobile Application Development</p>
                <p>Adobe After Effect Animation Tool</p>   
                <p>Python Programming</p>
                <p>Data Analytics & R Programming</p>   
                <p>Android Mobile Application Development</p>      
            </div>
            </div>
            
           
            <div className='col-12 col-md-4'>
           <h4 className='text-white'>Institution</h4> 
            <div className='transparentbg  text-left mx-auto'  data-aos="flip-right" data-aos-duration="3000">
                <p>KaaShiv Info Tech</p>
                <p>St.Peter's University</p>
                <p>St.Peter's University</p>
                <p>UNIQ technologies</p>
                <p>St.Peter's University</p>  
                <p>St.Peter's University</p>
                <p>St.Peter's University</p> 
                <p>Adhityaa Infomedia Technologies</p>         
            </div>
            </div>

            <div className='col-12 col-md-4'>
           <h4 className='text-white'>Year</h4> 
            <div className='transparentbg  text-left mx-auto'  data-aos="flip-left" data-aos-duration="3000">
                <p>08.03.2015</p>
                <p>29.09.2015</p>
                <p>11.03.2016</p>
                <p>19.06.2016</p>
                <p>23.02.2016</p>
                <p>12.10.2017</p>   
                <p>20.03.2018</p>  
                <p>11.12.2017 - 10.2.2018 ( Internship )</p>          
            </div>
            </div>

            </div>
        </div>
        <br/>
        <br/>
        </div>
    </div>
  )
}

export default Workshops