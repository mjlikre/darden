import React, {Component} from 'react';
import ProviderNavbar from '../MainNavbar/providerNavbar'
import SeekerNavbar from '../MainNavbar/seekerNavbar'
import { fetchUser } from "../../actions";
import { connect } from 'react-redux'



class Index extends Component {
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
                    </div>
                );
            }
            else if( this.props.userType === 'seeker'){
                return(
                    <div>
                        <SeekerNavbar/>
                    </div>
                )
            }
            else if(this.props.userType === 'admin'){
                return(
                    <div>
                        <p>hey there</p>
                    </div>

                )
            }
        }


    }
}
const mapStateToProps = (state) => ({
    userType: state.fetchUserReducer.user.usertype
})
export default connect(mapStateToProps, {fetchUser})(Index);

