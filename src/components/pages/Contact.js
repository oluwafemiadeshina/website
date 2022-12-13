import React from 'react';
import {Link} from 'react-router-dom';

function Contactus(){
    return(
        <>
        <section className="py-4 bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 my-auto">
                        <h4>Contact Us</h4>
                    </div>
                    <div className="col-md-3 contacty my-auto float-end d-flex">
                        <Link to="/" className="nav-link">Home &nbsp;</Link>
                        <span className=""> / Contact Us</span>
                    </div>
                </div>
            </div>
       </section>

       <section className="section bg-light border-bottom">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className='col-md-6'>
                                <h6>Contact Form</h6>
                                <hr/>
                                <div className="form-group">
                                    <label className='mb-1' forName="">Full Name</label>
                                    <input className="form-control" type="text" name="" placeholder="Enter your name" />
                                </div>
                                <div className="form-group my-3">
                                    <label className='mb-1' forName="">Phone Number</label>
                                    <input className="form-control" type="phone" name="" placeholder="Enter your Phone Number" />
                                </div>
                                <div className="form-group my-3">
                                    <label className='mb-1' forName="">Email Address</label>
                                    <input className="form-control" type="email" name="" placeholder="Enter your Email Address" />
                                </div>
                                <div className="form-group my-3">
                                    <label className='mb-1' forName="">Message</label>
                                    <textarea row="3" className="form-control" placeholder="Type your Message..."></textarea>
                                </div>
                                <div className="form-group my-3">
                                    <button type="button" className="btn btn-primary shadow w-100"> Send Message</button>
                                </div>
                            </div>
                            <div className='col-md-6 border-start'>
                                <h5 className='main-heading'>Address Information</h5>
                                <div className='underline'></div>
                                <p>#XXX, Byrathi, Apapa Karmataka -56XXXX, Lagos Nigeria</p>
                                <p>+323 3244353534</p>
                                <p>email@domain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
        </>
    );
}

export default Contactus;