import React from "react";
import { Link } from "react-router-dom"
import switer from "../assets/switer1.jpg"
import ladakh from "../assets/ladak1.jpg"
import mountain from "../assets/mountever.jpg"
import beach from "../assets/thai beach.jpg"
import customer1 from "../assets/custom1.jpg"
import customer2 from "../assets/custom2.jpg"
import customer3 from "../assets/custom3.jpg"


class Home extends React.Component {
    render() {
        return (
            <>
                
                {/* main */}
                <main id="places" >
                    <div className="container p-5">
                        <h1 className="mainheading m-5">Explore Places</h1>
                        <div className="row">
                            <div className="col">
                                <div className="box1 clearfix m-md-5 mb-3" id="land">
                                    <div className="imgbox">
                                        <img src={switer} alt="switer" className="w-100 h-100" />
                                    </div>
                                    <div className="textbox p-md-5 pt-3">
                                        <h3 className="h1">Geneva, Switzerland</h3>
                                        <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, soluta?
                                            Deleniti
                                            libero corporis, amet laborum sed iure. Excepturi voluptas est nisi rerum odio
                                            veritatis? Qui minus explicabo quasi culpa, aliquam quo ipsa nisi possimus voluptate ab,
                                            nam optio? Laborum sunt perferendis facilis sequi tempora blanditiis ipsum atque
                                            delectus nemo dolor.</p>
                                        <Link className='btn btn-primary fs-3' to='/destination'>More</Link>
                                    </div>
                                </div>
                                <div className="box2 clearfix m-md-5 mb-3" id="ladakh">
                                    <div className="imgbox">
                                        <img src={ladakh} alt="" className="w-100 h-100" />
                                    </div>
                                    <div className="textbox p-md-5 pt-3">
                                        <h3 className="h1">Ladakh, India</h3>
                                        <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, soluta?
                                            Deleniti
                                            libero corporis, amet laborum sed iure. Excepturi voluptas est nisi rerum odio
                                            veritatis? Qui minus explicabo quasi culpa, aliquam quo ipsa nisi possimus voluptate ab,
                                            nam optio? Laborum sunt perferendis facilis sequi tempora blanditiis ipsum atque
                                            delectus nemo dolor.</p>
                                        <Link className='btn btn-primary fs-3' to='/destination'>More</Link>
                                    </div>
                                </div>

                                <div className="box1 clearfix m-md-5 mb-3" id="nepal">
                                    <div className="imgbox">
                                        <img src={mountain} alt="" className="w-100 h-100" />
                                    </div>
                                    <div className="textbox p-md-5 pt-3">
                                        <h3 className="h1">Nepal</h3>
                                        <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, soluta?
                                            Deleniti
                                            libero corporis, amet laborum sed iure. Excepturi voluptas est nisi rerum odio
                                            veritatis? Qui minus explicabo quasi culpa, aliquam quo ipsa nisi possimus voluptate ab,
                                            nam optio? Laborum sunt perferendis facilis sequi tempora blanditiis ipsum atque
                                            delectus nemo dolor.</p>
                                        <Link className='btn btn-primary fs-3' to='/destination'>More</Link>
                                    </div>
                                </div>
                                <div className="box2 clearfix m-md-5 mb-3" id="beach">
                                    <div className="imgbox">
                                        <img src={beach} alt="" className="w-100 h-100" />
                                    </div>
                                    <div className="textbox p-md-5 pt-3">
                                        <h3 className="h1">Beach of La Concha</h3>
                                        <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, soluta?
                                            Deleniti
                                            libero corporis, amet laborum sed iure. Excepturi voluptas est nisi rerum odio
                                            veritatis? Qui minus explicabo quasi culpa, aliquam quo ipsa nisi possimus voluptate ab,
                                            nam optio? Laborum sunt perferendis facilis sequi tempora blanditiis ipsum atque
                                            delectus nemo dolor.</p>
                                        <Link className='btn btn-primary fs-3' to='/destination'>More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* article */}
                <article>
                    <div className="row m-5">
                        <div className="col-md-8 review">
                            <h2 className="h1">Testimonials</h2>
                            <div className="emptybox"></div>
                            <p className="fs-5">
                                Discover unforgettable travel experiences through Travel<sub>X</sub> Testimonials section. Read
                                firsthand accounts from our satisfied customers, gaining confidence in our exceptional services. Let
                                their stories ignite your wanderlust and inspire your next remarkable journey. Join us and create
                                your own extraordinary memories.
                            </p>
                        </div>
                    </div>
                    <div className="row m-5">

                        <div className="col-12 col-lg-4 cards mb-3 m-auto">
                            <div className="cardimgbox"><img src={customer1} alt="customer" /> </div>
                            <div className="cardtextbox">
                                <h1 className="h3">George</h1>
                                <p className="fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, debitis!</p>
                                <div className="emptybox"></div>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <p className="experience fs-3">Good Experience</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 cards mb-3 m-auto">
                            <div className="cardimgbox"><img src={customer2} alt="customer" /> </div>
                            <div className="cardtextbox">
                                <h1 className="h3">Isabella</h1>
                                <p className="fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, debitis!</p>
                                <div className="emptybox"></div>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <p className="experience fs-3">Adventurous</p>
                            </div>
                        </div>


                        <div className="col-12 cards mb-md-3 col-lg-4  m-auto">
                            <div className="cardimgbox"><img src={customer3} alt="customer" /> </div>
                            <div className="cardtextbox">
                                <h1 className="h3">Lisa</h1>
                                <p className="fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, debitis!</p>
                                <div className="emptybox"></div>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star fs-3 yellowstar"></i>
                                <i className="fa-solid fa-star-half yellowstar fs-3"></i>
                                <p className="experience fs-3">Affordable</p>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        )
    }
}

export default Home