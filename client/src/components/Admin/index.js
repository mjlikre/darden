import React, {Component} from 'react';
import { getUserProfiles, changeStatusOne, changeStatusTwo, approved, rejected, restart, fetchUser, adminSignIn} from '../../actions/index'
import {connect} from "react-redux";

class Index extends Component {

    componentDidMount ()  {
        this.props.fetchUser()
        this.props.getUserProfiles()

    }

    fetchAdmin(){
        if (this.props.user._id){
            const data = {
                id: this.props.user._id
            }
            this.props.adminSignIn(data)

        }
    }



    statusOne(){
        if(this.props.profilesOne[0]){
            console.log(this.props.profilesOne)
            return this.props.profilesOne.map(profile => {
                console.log(profile)
                return(
                    <li className="list-group-item">{profile.firstname} {profile.lastname} <button className="btn-success" onClick={()=>{this.setInterview(profile.id)}}>set interview</button></li>
                )
            })
        }
    }

    setInterview(e){
        const data = { id: e}
        this.props.changeStatusOne(data)

    }

    interviewed (e) {
        const data = { id: e}
        this.props.changeStatusTwo(data)
    }

    approve (e) {
        const data = { id: e}
        this.props.approved(data)
    }

    reject (e) {
        const data = { id: e}
        this.props.rejected(data)
    }

    restart (e) {
        const data = { id: e}
        this.props.restart(data)
    }

    statusTwo(){
        if(this.props.profilesTwo[0]){

            return this.props.profilesTwo.map(profile => {
                console.log(profile)

                return(
                    <li className="list-group-item">{profile.firstname} {profile.lastname}   <button className="btn-success" onClick={()=>{this.interviewed(profile.id)}}>interviewed</button></li>
                )
            })
        }
    }
    statusThree(){
        if(this.props.profilesThree[0]){

            return this.props.profilesThree.map(profile => {

                return(
                    <li className="list-group-item">{profile.firstname} {profile.lastname}   <button className="btn-success" onClick={()=>{this.approve(profile.id)}}>Approve</button>   <button className="btn-danger" onClick={()=>{this.reject(profile.id)}}>Reject</button></li>
                )
            })
        }
    }
    statusZero(){
        if(this.props.profilesZero[0]){

            return this.props.profilesZero.map(profile => {

                return(
                    <li className="list-group-item">{profile.firstname} {profile.lastname} <button className="btn-success" onClick={()=>{this.restart(profile.id)}}>Restart</button></li>
                )
            })
        }
    }

    render() {
        if (this.props.user._id && !this.props.admin){
            this.fetchAdmin(this.props.user._id)
        }
        if (this.props.admin) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h1>Needs an interview</h1>
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    {this.statusOne()}
                                </ul>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <h1>Needs a meeting</h1>
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    {this.statusTwo()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h1>Waiting for further review</h1>
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    {this.statusThree()}
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <h1>Rejected</h1>
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    {this.statusZero()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div className='container'>
                    <h1>Sorry, You dont have admin access</h1>

                </div>
            )
        }
    }

}
const mapStateToProps = (state) => ({
    profilesOne: state.adminReducer.userProfilesOne,
    profilesTwo: state.adminReducer.userProfilesTwo,
    profilesThree: state.adminReducer.userProfilesThree,
    profilesZero: state.adminReducer.userProfilesZero,
    authenticated: state.auth.authenticated,
    user: state.fetchUserReducer.user,
    admin: state.adminReducer.admin,
    admin_error: state.adminReducer.admin_error

})

export default connect(
    mapStateToProps,
    {
        getUserProfiles,
        changeStatusOne,
        changeStatusTwo,
        approved,
        rejected,
        restart,
        fetchUser,
        adminSignIn
    })(Index);