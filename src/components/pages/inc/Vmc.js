import React from 'react';
import {Link} from 'react-router-dom';

function Vmc(){
    
    return(
        <>
        <section className="section bg-c-light border-top">
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="main-heading">Vision, Mission, and Values</h2>
                            <div className="underline mx-auto"></div>
                            <div className="row mt-5">
                            <div className="col-md-4">
                                <h6>Our Vision</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Our Mission</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Our Core Values</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        </>

    );
}

export default Vmc;