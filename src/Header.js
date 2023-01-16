import React from 'react'

function Header() {
  return (
    <div className='sticky-top ' >
        
<nav id="navbar-example2" className="navbar-nav-scroll  navbar-light bg-light p-2">
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link text-primary" href="#About">ABOUT</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-primary" href="#Skills ">SKILLS</a>
    </li>
    <li className="nav-item"><a className="nav-link text-primary" href="#Projects">PROJECTS</a></li>
    <li className="nav-item"><a className="nav-link text-primary" href="#Workexperience"> EXPERIENCE</a></li>
    <li className="nav-item"><a className="nav-link text-primary" href="#AdditionalCourse">COURSE</a></li>
    <li className="nav-item"><a className="nav-link text-primary" href="#Footer">CONTACT</a></li>
    </ul>
</nav>

    </div>
  )
}

export default Header