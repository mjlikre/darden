import React from "react";
import { Link } from "react-router-dom";
const providerNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg shadow-sm">
                <Link className="navbar-brand naturalWHite rounded p-2 " to="/">
                    <i className="fa fa-home" /> Home
                </Link>
                <div className="collapse navbar-collapse float-right" id="navbarText">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link naturalWHite" to="/dalendar">
                                <i className="fa fa-id-badge" />
                                Dalendar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link float-right naturalWHite"
                                to="/profiles/"
                            >
                                <i className="fa fa-users" />
                                New Booking
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link float-right naturalWHite" to="/signin">
                                <i className="fa fa-sign-in"/>
                                Past Booking
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link naturalWHite" to="/destinationr">
                                <i className="fa fa-id-badge" />
                                Favorites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link naturalWHite" to="/contactUs">
                                <i className="fa fa-id-badge" />
                                Payment
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link naturalWHite" to="/contactUs">
                                <i className="fa fa-id-badge" />
                                Setting
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link naturalWHite" to="/contactUs">
                                <i className="fa fa-id-badge" />
                                Account
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link naturalWHite" to="/signout">
                                <i className="fa fa-id-badge" />
                                Logout
                            </Link>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default providerNavbar;
