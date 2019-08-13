import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import { fetchUser } from "../../actions";

class Index extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <div className='container'>
                    <h1>Welcome, {this.props.firstname}</h1>
                    <br/>
                    <h5>Required Steps</h5>
                    <br/>
                    <br/>
                    <br/>
                    <h4>Legal Agreements</h4>
                    <br/>
                    <h4>Profile photo</h4>
                    <br/>
                    <h4>Get help</h4>
                    <Link to='/dashboard'><button className="btn btn-primary">Next</button></Link>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.fetchUserReducer.user
})

export default connect(mapStateToProps, { fetchUser })(Index);