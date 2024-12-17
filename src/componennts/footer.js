import React from "react";
import { Link } from "react-router-dom"
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-3 mb-3">
              <h1 className="h1">
                Travel<sub>X</sub>
              </h1>
              <span className="fs-4 me-5">Ease</span>
              <span className="fs-4 me-5">Comfort</span>
              <span className="fs-4">Travel</span>
            </div>
            <div className="col-md-3">
              <h3 className="h3">Popular Places</h3>
              <ul className="list-unstyled">
                <li>
                  <a className="fs-4 text-decoration-none" href="/#ladakh">
                    Ladakh
                  </a>
                </li>
                <li>
                  <a className="fs-4 text-decoration-none" href="/#land">
                    Switzerland
                  </a>
                </li>
                <li>
                  <a className="fs-4 text-decoration-none" href="/#beach">
                    Beach of La Concha
                  </a>
                </li>
                <li>
                  <a className="fs-4 text-decoration-none" href="/#nepal">
                    Nepal
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="h3">
                About Travel<sub>X</sub>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <Link className="fs-4 text-decoration-none" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="fs-4 text-decoration-none" to="/destination">
                    Destination
                  </Link>
                </li>
                <li>
                  <Link className="fs-4 text-decoration-none" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="fs-4 text-decoration-none" to="/contactus">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <p className="h3">
                <i
                  className="fa-solid fa-envelope h3"
                  style={{ color: "#000000" }}
                ></i>{" "}
                Subscribe to Our Newsletter
              </p>
              <form action="">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-100 fs-4 subscribe"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="btn-primary btn mt-3 fs-5"
                />
              </form>
            </div>
          </div>
          <div className="row">
            
          <div className="col text-center fs-3 text-white p-2" style={{backgroundColor:"rgb(28, 89, 129)"}}>
              Developed By Chaudhary Aditya 
              <a href="https://www.linkedin.com/in/thejaat08/" target="_blank"><i class="fa-brands fa-linkedin-in fs-2 ms-5" style={{color:" #ffffff;"}}></i></a> 
              <a href="https://github.com/thejaat" target="_blank"><i class="fa-brands fa-github fs-2 ms-5" style={{color:"rgb(0,0,0)"}}></i></a> 
            </div>
          </div>
          <div className="row">
            
            <div className="col text-center fs-5">
              © 2024 Copyright Travel<sub>X</sub>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
