import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Brand</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/contact">Conatact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;