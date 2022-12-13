import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <h6>Company Information</h6>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p> 
                </div>
                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                    <div><Link to="/">Blog</Link></div>
                </div>
                <div className="col-md-4">
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p className="text-white mb-1">#64, Victoria Island, Lagos, Nigeria</p></div>
                    <div><p className="text-white mb-1">+090 24599283</p></div>
                    <div><p className="text-white mb-1">+090 24599283</p></div>
                    <div><p className="text-white mb-1">email@domain.com</p></div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;