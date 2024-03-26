import 'react-bootstrap'
// import { useState } from 'react'
import '../index.css'

import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className=' bgt' >
            <nav className=" navbar navbar-expand-lg navbar-dark py-2 m-0 ">
                <a href="/" className=" text-decoration-none ">
                    <h6 className='text-white mx-5'>Masthan Javid Vali Shaik</h6>
               
                </a>
                <button
                    className="navbar-toggler border-none outline-none m-2 bgt"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{outline:'none',border:'none',backgroundColor:'black'}}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse m-auto" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center ">
                    <li className="nav-item "><a href="#" className="nav-link " aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link"aria-current="page">About</a></li>
                    <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                    <li className="nav-item"><a href="#qualification" className="nav-link">Qualification</a></li>
                    <li className="nav-item"><a href="#internships" className="nav-link">Internships</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    {/* <li className="nav-item"><Link to="#" className="nav-link"><i className="bi bi-moon"></i></Link></li> */}
                </ul>
                </div>
            </nav>
        </header>
    );
}