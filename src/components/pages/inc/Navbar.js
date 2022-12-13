import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    let isActive = true;
    return(
        <React.Fragment>
            <div className="navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                            <div className="container-fluid">
                            <Link to="/" className="navbar-brand" >Website</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link to="/" 
                                className={`nav-link ${isActive ? "active" : ""}`}
                                >Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact Us</Link>
                                </li>
                            </ul>
                            </div>
                            </div>
                        </nav>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>




    );
}

export default Navbar;