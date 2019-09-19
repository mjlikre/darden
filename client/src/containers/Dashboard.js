import React, {Component} from 'react';
import { fetchUser } from "../actions";
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'

import SeekerDashboard from "../components/SeekerDashboard"
import ProviderDashboard from "../components/ProviderDashboard"



class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        if(!this.props.user.usertype){
            return(
                <div className='container'>
                    <h1>Give it a second</h1>
                </div>
            )
        }
        else{
            if (this.props.user.usertype === 'provider'){
                return (
                    <ProviderDashboard userInfo = {this.props.user}/>
                );
            }
            else if( this.props.user.usertype === 'seeker'){
                return(

                    <SeekerDashboard userInfo = {this.props.user}/>

                )
            }
            else if(this.props.usertype === 'admin'){
                return(
                   <Redirect to='/admin'/>

                )
            }
        }


    }
}
const mapStateToProps = (state) => ({
    user: state.fetchUserReducer.user
})
export default connect(mapStateToProps, {fetchUser})(Dashboard);

