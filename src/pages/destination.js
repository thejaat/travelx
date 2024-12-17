import offer1 from "../assets/offer-1.webp"
import offer2 from "../assets/offer-2.webp"
import offer3 from "../assets/offer-3.webp"
import Findbox from "../utils/findbox"
const Destination = ()=>{
    return(
        <>
{/* carousel */}
    <div className="row">
        <div className="col">
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={offer1} loading="lazy" className="d-block w-100" alt="offer1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={offer2} loading="lazy" className="d-block w-100" alt="offer2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={offer3} loading="lazy" className="d-block w-100" alt="offer3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    {/* find box */}
   <Findbox/>
    {/* why us */}
    <div className="row" style={{ background: "rgb(243,183,88)" }}>
  <div className="col">
    <div className="whyus d-md-flex align-items-center justify-content-center p-3 flex-wrap text-center">
      <p className="fs-3 me-md-5 text-white">1000+ Travellers</p>
      <p className="fs-3 me-md-5 text-white">100+ Trips</p>
      <p className="fs-3 text-white">4.9 Google Rating</p>
    </div>
  </div>
</div>

<div className="row p-5" style={{ background: "rgb(244,244,244)" }}>
  <div className="col text-center p-5">
    <p className="h1 fw-bold text-capitalize">why us ?</p>
  </div>
  <div className="row">
    <div className="cards-list d-flex align-items-center justify-content-center">
      <div
        className="why-uscards d-flex align-items-center justify-content-center"
        style={{ flexWrap: "wrap" }}
      >
        <div className="cardshow p-md-5 text-center d-flex align-items-center flex-column justify-content-center">
          <i className="fa-solid fa-location-dot m-md-3 why-us-icons"></i>
          <p className="fs-5">Location <br /> Specific</p>
        </div>
        <div className="cardshow p-5 text-center d-flex align-items-center flex-column justify-content-center">
          <i className="fa-solid fa-star m-md-3 why-us-icons"></i>
          <p className="fs-5">Quality Assurance</p>
        </div>
        <div className="cardshow p-5 text-center d-flex align-items-center flex-column justify-content-center">
          <i className="fa-solid fa-phone m-md-3 why-us-icons"></i>
          <p className="fs-5">24x7 Support</p>
        </div>
        <div className="cardshow p-5 text-center d-flex align-items-center flex-column justify-content-center">
          <i className="fa-solid fa-money-bill m-md-3 why-us-icons"></i>
          <p className="fs-5">Secure Transaction</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Destination