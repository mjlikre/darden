import React, {Component} from 'react';
import ProviderNavbar from '../components/MainNavbar/providerNavbar'
import SeekerNavbar from '../components/MainNavbar/seekerNavbar'
import { fetchUser } from "../actions";
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import images1 from "../images/img1.png";



class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchUser()
        console.log(this.props.userType)
    }

    render() {
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
                            hey
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
                                <div className='col-md-6'>
                                    <h3>Past bookings</h3>
                                </div>
                                <div className='col-md-4 text-center' >
                                    <img className="card-img-top" src={images1} alt = ''/>
                                    <div className="card-body">
                                        <Link to='/booking'><button className="btn btn-primary"><h2 className="text-center">Book A Service</h2></button></Link>
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

