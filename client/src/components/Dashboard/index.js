import React, {Component} from 'react';
import Navbar from '../MainNavbar'
import { fetchUser } from "../../actions";
import { connect } from 'react-redux'

class Index extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        console.log(this.props)
        return (

            <div>
                <Navbar/>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.fetchUserReducer.user
})
export default connect(mapStateToProps, {fetchUser})(Index);

