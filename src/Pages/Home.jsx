// import React from 'react'
import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Qualification from './Qualification.jsx'
import Internships from './Internships.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import '../App.css'

// import Typed from 'typed.js'

export default function Home() {
  const style={
    minHeight:'30em'
  };
 
  return (
    <div className='container bg-black'>
    <div className="position-sticky top-0 w-100 " style={{zIndex:1}} >
      <Header />
      <hr className='m-0 p-0 '/>
      </div>

      <div className='container-fluid d-flex flex-column flex-sm-1 flex-md-1 flex-lg-3 flex-sm-column flex-md-column flex-lg-row  align-items-center justify-content-center mt-4' style={style}>
      <div className="col-auto">
          <img src="main.png"  alt="" className='img-fluid drop-2' />
          {/* style={{filter: "drop-shadow(1 0.2rem 0.25rem rgba(225, 225, 225, 1))"}} filter style */}
          </div>
        <div className="col-auto">
          <div className=" m-1 p-1 g-1 d-flex flex-row flex-md-row flex-lg-column   align-items-center justify-content-center">
            {/* have to add more link profiles */}
            <a href='https://github.com/javid4962' target='blank' className="col"><i className="bi bi-github fs-5 m-3"></i></a> {/* https://github.com/javid4962 */}
            <a href='https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/' target='blank' className="col"><i className="bi bi-linkedin fs-5 m-3"></i></a> {/* https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/ */}
            <a href='https://leetcode.com/javid4962' target='blank' className="col"><i className="bi bi-code-square fs-5 m-3"></i></a> {/* https://leetcode.com/javid4962 */}
            <a href='https://www.hackerrank.com/profile/javid_4962' target='blank' className="col"><i className="bi bi-code-slash fs-5 m-3"></i></a> {/* https://www.hackerrank.com/profile/javid_4962 */}
            <a href='https://instagram.com/_javid_4962' target='blank' className="col"><i className="bi bi-instagram fs-5 m-3"></i></a>
          </div>
        </div>
        <div className=" text-wrap d-flex  flex-column justify-content-center align-items-center ">
          <h2 className='text-warning d-inline '>Masthan Javid Vali Shaik</h2> {/* want to change font color and font-family */}
          <span className='text-info' >Frontend Webdeveloper</span>
          
          <p className='text-white m-5 w-75 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestias quidem, deleniti quam itaque ipsum sit nisi similique officiis nemo? Unde incidunt, atque quibusdam mollitia repellat quae officia laudantium maxime.</p>
          <div className="">
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVwsJMSzmqNWpJgDWLVrRWGVhWmGjDSHVgSSMTPvNjBsPJZnMrmgxcsNKKWRhMrVrSPWL' target='blank' className="btn btn-primary m-0 p-1 fs-6 ">Contact Me <i className="btn text-white bi bi-telephone p-0 m-0 bold"></i></a>
          </div>
        </div>
      </div>

      <About/>
      {/* <hr /> */}
      <Skills/>
      {/* <hr /> */}
      <Qualification/>
      {/* <hr /> */}
      <Internships/>
      {/* <hr /> */}
      <Projects/>
      {/* <hr /> */}
      <Contact/>

    </div>
  )
}
