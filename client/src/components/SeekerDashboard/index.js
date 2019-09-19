import React, {Component} from 'react';
import SeekerNavbar from "../MainNavbar/seekerNavbar";
import logo1 from "../../images/anotherLogo.png";
import images1 from "../../images/img1.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import { getSeekerBooking } from "../../actions";
import moment from 'moment'


class Index extends Component {
    componentDidMount(){
        this.props.getSeekerBooking(this.props.userInfo._id)

    }

    displayBookings=()=>{

        if (this.props.bookings){

            const bookings = this.props.bookings.slice(0,5)
            console.log(this.props.bookings)

            return bookings.map(booking =>{
                return(
                    <li className="list-group-item">{booking.booking.service} on {moment(booking.booking.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
                )
            })
        }
    }
    render() {
        const logoStyle = {
            width : "100%",
            marginTop: "100px",
            marginBottom: '50px'
        }
        return (
            <div>
                <SeekerNavbar/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <img style={logoStyle} src={logo1} alt = ''/>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-7 jumbotron'>
                            <h3>Past bookings</h3>
                            <div className='card'>
                                {this.displayBookings()}
                            </div>

                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-4 text-center' >
                            <img className="card-img-top" src={images1} alt = ''/>
                            <div className="card-body">
                                <Link to='/booking'><button className="btn btn-primary"><h2 className="text-center">Book A Service</h2></button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-5 container'>
                            <div className='card'>
                                lol
                            </div>

                        </div>
                        <div className='col-md-3 container' >
                            <div className='card'>
                                lol
                            </div>
                        </div>
                        <div className='col-md-3 container' >
                            <div className='card'>
                                lol
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    bookings: state.dataReducer.getBooking,
    bookingError: state.dataReducer.getBookingError
})

export default connect(mapStateToProps, {getSeekerBooking})(Index);