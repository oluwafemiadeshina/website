import React from 'react';
import Slider from '../pages/inc/Slider';
import Vmc from './inc/Vmc';
import {Link} from 'react-router-dom';
import img from './images/What-is-UI-UX-Design.jpeg'

function Home(){
    
    return(
        <>
        <Slider/>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Our Company</h3>
                        <div className="underline mx-auto"></div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                    </div>
                </div>
            </div>
        </section>
        <Vmc/>


        <section className="section border-top">
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="main-heading text-center">Our Services</h2>
                            <div className="underline mx-auto"></div>
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <div className="card shadow">
                                    <img src={img} className="w-100 border-buttom" />
                                    <div className="card-body">
                                        <h6>Service 1</h6>
                                        <div className="underline"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <Link to="./services" className="btn btn-link">Read More</Link>
                                    </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                    <img src={img} className="w-100 border-buttom" />
                                    <div className="card-body">
                                        <h6>Service 1</h6>
                                        <div className="underline"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <Link to="./services" className="btn btn-link">Read More</Link>
                                    </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                    <img src={img} className="w-100 border-buttom" />
                                    <div className="card-body">
                                        <h6>Service 1</h6>
                                        <div className="underline"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <Link to="./services" className="btn btn-link">Read More</Link>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        </>

    );
}

export default Home;