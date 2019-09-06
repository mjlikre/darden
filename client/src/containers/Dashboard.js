import React, {Component} from 'react';
import ProviderNavbar from '../components/MainNavbar/providerNavbar'
import SeekerNavbar from '../components/MainNavbar/seekerNavbar'
import { fetchUser } from "../actions";
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import images1 from "../images/img1.png";
import logo1 from "../images/logo.png";
// import Booking from "../containers/booking"



class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchUser()
        console.log(this.props.userType)
    }

    render() {
        const logoStyle = {
            width : "100%",
            marginTop: "100px",
            marginBottom: '50px'
        }
        if(!this.props.userType){
            return(
                <div className='container'>
                    <h1>Give it a second</h1>
                </div>
            )
        }
        else{
            if (this.props.userType === 'provider'){
                return (
                    <div>
                        <ProviderNavbar/>
                        <div className='container'>
                            <h1>hey</h1>
                        </div>
                    </div>
                );
            }
            else if( this.props.userType === 'seeker'){
                return(
                    <div>
                        <SeekerNavbar/>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <img style={logoStyle} src={logo1} alt = ''/>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-7'>
                                    <h3>Past bookings</h3>
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
                )
            }
            else if(this.props.userType === 'admin'){
                return(
                   <Redirect to='/admin'/>

                )
            }
        }


    }
}
const mapStateToProps = (state) => ({
    userType: state.fetchUserReducer.user.usertype
})
export default connect(mapStateToProps, {fetchUser})(Dashboard);

