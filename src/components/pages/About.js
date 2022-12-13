import React from 'react';
import Vmc from './inc/Vmc';

function Aboutus(){
    return(
        <>
        <section className="py-4 bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h4>About Us</h4>
                    </div>
                    <div className="col-md-8 my-auto">
                        <h6 className="float-end">Home / About Us</h6>
                    </div>
                </div>
            </div>
       </section>

       <section className="section bg-light border-bottom">
            <div className="container">
            <h3 className="main-heading">Our Company</h3>
                <div className="underline"></div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
       </section>
       <Vmc/>
        </>
       
    );
}

export default Aboutus;