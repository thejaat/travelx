import React from "react";
import aboutImage from "../assets/about.png"

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main style={{ background: "rgb(249,244,240)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <img src={aboutImage} loading="lazy" alt="TravelX Logo" style={{ height: "40rem" }} />
              </div>
              <div className="col-lg-8 pt-5 pb-5">
                <h2>About Us</h2>
                <p className="fs-4">
                  Travel<sub>X</sub> is an innovative online marketplace that revolutionizes the way
                  people plan their trips. By partnering with location-specific travel agencies, we
                  offer a simplified and hassle-free experience for our customers. These expert
                  agencies provide us with their specialized itineraries, ensuring that we offer the
                  best prices and services to our customers. <br />
                  <br />
                  With our user-friendly platform, travelers can easily browse through a wide range
                  of well-categorized trips and book their preferred itinerary in just a few clicks.
                  <br />
                  <br />
                  No more overwhelming planning or overthinking, just a seamless experience from
                  start to finish.
                </p>
              </div>
            </div>

            <div className="achievements">
              <div className="row pb-5">
                <div className="col-3 text-center">
                  <i className="fa-solid fa-users"></i>
                  <h2 className="h2 mt-3">1000+</h2>
                  <p className="fs-5 mt-1">Travellers</p>
                </div>
                <div className="col-3 text-center">
                  <i className="fa-solid fa-earth-americas"></i>
                  <h2 className="h2 mt-3">200+</h2>
                  <p className="fs-5 mt-1">Places</p>
                </div>
                <div className="col-3 text-center">
                  <i className="fa-solid fa-face-smile"></i>
                  <h2 className="h2 mt-3">100+</h2>
                  <p className="fs-5 mt-1">Trips</p>
                </div>
                <div className="col-3 text-center">
                  <i className="fa-solid fa-star"></i>
                  <h2 className="h2 mt-3">4.5+</h2>
                  <p className="fs-5 mt-1">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default About;
