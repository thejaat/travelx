import { Link } from "react-router-dom"
import React,{use, useState} from "react"
const Header = ()=>{
    const[isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <div>
             <div className="container">
            <div className="row">
                <div className="col navbar d-flex align-items-center justify-content-between mt-3 ms-5 me-5">
                    <h1 className="h1 fw-bold text-dark">Travel<sub>X</sub></h1>
                    <div className="hamburger d-block d-lg-none" onClick={toggleMenu}>
                        <div className={`line1 line ${isMenuOpen ? "active" :""}`}></div>
                        <div className={`line2 line ${isMenuOpen ? "active" :""}`}></div>
                        <div className={`line3 line ${isMenuOpen ? "active" :""}`}></div>
                    </div>
                    <nav className={`secheader-menu d-lg-block ${isMenuOpen ? "active" :""}`} >
                        <ul
                            className="list-unstyled d-lg-flex align-items-center justify-content-between list-items me-lg-5 mt-4">
                            <li className="me-lg-5">
                                <Link className='text-decoration-none fs-2 me-5 text-dark' to='/'>Home</Link>
                                </li>
                            <li className="me-lg-5">
                                <Link className='text-decoration-none fs-2 me-5 text-dark' to='/destination'>Destinations</Link>
                                </li>

                             <li className="me-lg-5">
                                <Link to="/about" className="text-decoration-none fs-2 me-5 text-dark">About</Link> 
                            </li>
                            <li className="me-lg-5">
                                <Link className='text-decoration-none fs-2 me-lg-3 text-dark' to='/contactus'>ContactUs</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Header