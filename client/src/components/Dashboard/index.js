import React, {Component} from 'react';
import ProviderNavbar from '../MainNavbar/providerNavbar'
import SeekerNavbar from '../MainNavbar/seekerNavbar'
import { fetchUser } from "../../actions";
import { connect } from 'react-redux'

class Index extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        if (this.props.user.usertype === 'provider'){
            return (

                <div>
                    <ProviderNavbar/>
                </div>
            );
        }
        else if( this.props.user.usertype === 'seeker'){
            return(
                <div>
                    <SeekerNavbar/>
                </div>
            )
        }

    }
}
const mapStateToProps = (state) => ({
    user: state.fetchUserReducer.user
})
export default connect(mapStateToProps, {fetchUser})(Index);

