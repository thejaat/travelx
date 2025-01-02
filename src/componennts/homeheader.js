import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import homewall from "../assets/wal1.jpg"
const Homeheader = () => {
     const[isMenuOpen,setIsMenuOpen] = useState(false)
    
        const toggleMenu =()=>{
            setIsMenuOpen(!isMenuOpen)
        }
    return (
        <header id="home">
         
            <img src={homewall} className='bgVedio'/>
            {/* navbar */}
            <div className="container">
                <div className="row">
                    <div className="col navbar d-flex align-items-center justify-content-between mt-3 ms-5 me-5">
                        <h1 className="h1 fw-bold text-wwhite">Travel<sub>X</sub></h1>
                        <div className="hamburger d-block d-lg-none" onClick={toggleMenu}>
                            <div className={`line1 line border-white ${isMenuOpen ? "active" : ""}`}></div>
                            <div className={`line2 line border-white ${isMenuOpen ? "active" : ""}`}></div>
                            <div className={`line3 line border-white ${isMenuOpen ? "active" : ""}`}></div>
                        </div>
                        <nav className={`secheader-menu d-lg-block ${isMenuOpen ? "active" : ""}`} >
                            <ul
                                className="list-unstyled d-lg-flex align-items-center justify-content-between list-items me-lg-5 mt-4">
                                <li className="me-lg-5">
                                    <Link className='text-decoration-none fs-2 me-5 text-white' to='/'>Home</Link>
                                </li>
                                <li className="me-lg-5">
                                    <Link className='text-decoration-none fs-2 me-5 text-white' to='/destination'>Destinations</Link>
                                </li>

                                <li className="me-lg-5">
                                    <Link to="/about" className="text-decoration-none fs-2 me-5 text-white">About</Link>
                                </li>
                                <li className="me-lg-5">
                                    <Link className='text-decoration-none fs-2 me-lg-3 text-white' to='/contactus'>ContactUs</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


            <div className="header-content d-flex align-items-center justify-content-center">
                <div className="header-text text-center pt-3 pb-3 ps-3 ps-md-5 pe-3 pe-md-5">
                    <h2 className="display-2">Let's Explore This World</h2>
                    <p className="fs-4 d-none d-lg-block">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                        nam cumque praesentium voluptates nisi recusandae consequatur
                        distinctio, omnis quia dignissimos.
                    </p>
                    <a href="#places" className="btn btn-light fs-2">
                        Explore More
                    </a>
                </div>
            </div>
     
    </header >
    )}


export default Homeheader;
