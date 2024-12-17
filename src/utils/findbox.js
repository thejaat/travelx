import React, { useState, useEffect } from "react";
import filter from "../assets/filter.svg";
import sort from "../assets/sort.svg";
import places from "./places.json"
import trip from "../assets/trip.svg"
import flght from "../assets/fligh.svg"
import meal from "../assets/meal.svg"
import stay from "../assets/stay.svg"
import car from "../assets/car.svg"
import sun from "../assets/sun.svg"
import offer from "../assets/offer.svg"
import tripcardprice from "../assets/trip-cardprice.svg"


const Cards = ({img,tripStartLocation,tripEndLocation,tripPoint1,tripPoint2,tripPoint3,departureDate,totalPrice,offerPrice,off,duration}) => {
    return (
        <>
            <div className="place">
                <div className="place-box1 p-4">
                    <img
                        src={img} loading="lazy"
                        alt="img"
                        style={{ height: "21rem", width: "100%", borderRadius: "2rem" }}
                    />

                    <div className="trip-card-location d-flex align-items-center justify-content-around mt-3">
                        <p className="fs-4 fw-bold text-center text-capitalize">{tripStartLocation}</p>
                        <div className="trip-card-location-direction">
                            <img src={trip} alt="trip" loading="lazy"/>
                        </div>
                        <p className="fs-4 fw-bold text-capitalize">{tripEndLocation}</p>
                    </div>

                    <div
                        className="place-icons d-flex align-items-center justify-content-between m-3 p-4"
                        style={{ background: "rgb(226,237,244)", borderRadius: "2rem" }}
                    >
                        <img src={flght} alt="flight"  loading="lazy"/>
                        <img src={meal} alt="meal" loading="lazy" />
                        <img src={stay} alt="stay" loading="lazy" />
                        <img src={car} alt="car"  loading="lazy"/>
                    </div>

                    <div className="trip-main-points ms-3 mt-3">
                        <ul>
                            <li className="fs-4">{tripPoint1}</li>
                            <li className="fs-4">{tripPoint2}</li>
                            <li className="fs-4">{tripPoint3}</li>
                        </ul>
                    </div>
                </div>

                <div className="place-box2 d-flex align-items-center justify-content-between">
                    <div className="trip-departure ms-4">
                        <div className="next-depart text-success fs-4 fw-bold">
                            Next Departing
                        </div>
                        <div className="next-depart-date fs-5">{departureDate}</div>
                    </div>
                    <div className="trip-price">
                        <img src={tripcardprice} alt="tripCard" loading="lazy"/>
                        <div className="trip-price-text">
                            <p className="text-strike m-0">
                                <del className="fs-5">₹{totalPrice}</del>
                            </p>
                            <p className="fs-3 m-0 fw-bold">₹{offerPrice}</p>
                            <p className="m-0 fs-5">per person</p>
                        </div>
                    </div>
                </div>

                <div className="offer">
                    <img src={offer} alt="offer" loading="lazy" />
                </div>
                <div className="offer-price">
                    <p className="fw-bold fs-4">{off} OFF</p>
                </div>
                <div
                    className="duration ms-2"
                    style={{ background: "rgb(28,89,129)" }}
                >
                    <div className="duration-box d-flex align-items-center justify-content-center ps-3 pe-3">
                        <img src={sun} alt="sun" style={{ height: "2rem" }} loading="lazy"/>
                        <p className="fs-4 text-white ms-3">{duration}</p>
                    </div>
                </div>
            </div>
        </>
    );
};


const Findbox = () => {
    const [allplaces, setAllpaces] = useState([])

    useEffect(() => {

        setAllpaces(places)
    }, [])

    //  react will not treat  a json file no more static file in src folder now it will ???// 
    // async function getPlaces() {
    //     try {
    //       let response = await fetch('./places.json');
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       let json = await response.json();
    //       console.log(json);
    //     } catch (error) {
    //       console.error('Fetch error:', error);
    //     }
    //   }

    const lowtoHigh = ()=>{
        const lowsortedplaces = [...allplaces].sort((a,b)=>a.offerPrice - b.offerPrice)
        setAllpaces(lowsortedplaces)
    }
    const hightoLow = ()=>{
        const highsortedplaces = [...allplaces].sort((a,b)=>b.offerPrice - a.offerPrice)
        setAllpaces(highsortedplaces)
    }

    const filterPlaces = (priceRange) => {
        let filteredPlaces = places.filter((item) => {
            if (priceRange === "less5000") {
                return item.offerPrice < 5000;
            } else if (priceRange === "5000to10000") {
                return item.offerPrice >= 5000 && item.offerPrice <= 10000;
            } else if (priceRange === "more10000") {
                return item.offerPrice > 10000;
            }
            return true; 
        });
        setAllpaces(filteredPlaces);
    };
    
  

    return (
        <>
            <div
                className="find-box d-flex align-items-center justify-content-between"
                style={{ background: "rgb(28,89,129)" }}
            >
                <div className="find-box-1 p-3 ms-md-4 d-flex">
                    <div className="filterbox d-none d-md-block">
                        <img src={filter} alt="filter" loading="lazy" />
                    </div>
                    <div className="dropdown ms-md-4">
                        <button
                            className="btn dropdown-toggle fs-2"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Price
                        </button>
                        <ul className="dropdown-menu price-menu" aria-labelledby="dropdownMenuButton1">
                            <li className="dropdown-item">
                                <input type="radio" name="selectprice"   onChange={() => filterPlaces("less5000")}/>
                                <label htmlFor="lessthan5000" className="fs-3 ms-2">
                                    Less than ₹5000
                                </label>
                            </li>
                            <li className="dropdown-item">
                                <input type="radio" name="selectprice"  onChange={() => filterPlaces("5000to10000")}/>
                                <label htmlFor="fivetoten" className="fs-3 ms-2">
                                    ₹5000 - ₹10,000
                                </label>
                            </li>
                            <li className="dropdown-item">
                                <input type="radio" name="selectprice"  onChange={() => filterPlaces("more10000")} />
                                <label htmlFor="morethanten" className="fs-3 ms-2">
                                    More than ₹10,000
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="find-box-2 d-flex align-items-center me-md-5">
                    <div className="sortbox d-md-block">
                        <img src={sort} alt="sort" loading="lazy"/>
                    </div>
                    <div className="dropdown ms-md-4">
                        <button
                            className="btn dropdown-toggle fs-2"
                            type="button"
                            id="dropdownMenuButton3"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Sort By
                        </button>
                        <ul className="dropdown-menu price-menu p-2" aria-labelledby="dropdownMenuButton3">
                            <li className="dropdown-item">
                                <input type="radio" name="pricetype" id="ascendingPrice" onChange={lowtoHigh}/>
                                <label htmlFor="ascendingPrice" className="fs-3 ms-2">
                                    Price Low to High
                                </label>
                            </li>
                            <li className="dropdown-item">
                                <input type="radio" name="pricetype" id="descendingPrice" onChange={hightoLow} />
                                <label htmlFor="descendingPrice" className="fs-3 ms-2">
                                    Price High to Low
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* places */}
            <div className="container-fluid" style={{ background: " rgb(244,244,244)" }}>
                <div className="row p-0">
                    <div className="col p-0">
                        <div className="places">
                            {/* <!-- place box start here -->
            <!-- place box end --> */}
                            {allplaces.map((place, index) => {
                                return <Cards {...place} key={index} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Findbox;
