import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from "react-router-dom";

class providerNavbar extends Component  {
    constructor(props) {
        super(props);
        this.toggleMainNavbar = this.toggleMainNavbar.bind(this);
        this.toggleAccountNavbar = this.toggleAccountNavbar.bind(this);
        this.state = {
            mainCollapsed: true,
            accountCollapsed: true
        };
    }

    toggleMainNavbar() {
        this.setState({
            mainCollapsed: !this.state.mainCollapsed
        });
    }
    toggleAccountNavbar() {
        this.setState({
            accountCollapsed: !this.state.accountCollapsed
        })
    }
    render(){
        return (

            <div>
                <Navbar className='bg-dark navbar-dark' color="faded" light>
                    <NavbarToggler onClick={this.toggleMainNavbar} className="mr-auto" />

                    <NavbarBrand href="/" className="ml-auto mr-auto">DarDen</NavbarBrand>

                    <NavbarToggler onClick={this.toggleAccountNavbar} className="ml-auto" > Accounts </NavbarToggler>

                    <Collapse isOpen={!this.state.mainCollapsed} navbar>
                        <div className='row'>
                                <div className='col-md-4'>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink href="/components/">Resources</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/dashboard">Dashboard</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/">Dalendar</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/">Reviews</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/">Equipment</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/">Projects</NavLink>
                                        </NavItem>


                                    </Nav>
                                </div>
                        </div>
                    </Collapse>
                    <Collapse isOpen={!this.state.accountCollapsed} navbar>
                        <div className='row text-right'>
                            <div className='col-md-12'>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="">Profile</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">Account Info</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">Payment</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link naturalWHite" to="/signout">
                                            <i className="fa fa-id-badge" /><button className='btn btn-danger'>
                                            Logout</button>
                                        </Link>
                                    </NavItem>

                                </Nav>
                            </div>
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        )
    }


};
export default providerNavbar;
