// import React, {Component} from 'react';
// import { getUserProfiles, changeStatusOne, changeStatusTwo, approved, rejected, restart, fetchUser, adminSignIn, signout} from '../../actions/index'
// import {connect} from "react-redux";
// import {Link} from "react-router-dom";
//
// class Index extends Component {
//
//
//     componentDidMount ()  {
//         this.props.fetchUser()
//         this.props.getUserProfiles()
//
//     }
//
//     fetchAdmin(){
//         if (this.props.user._id){
//             const data = {
//                 id: this.props.user._id
//             }
//             this.props.adminSignIn(data)
//
//         }
//     }
//
//
//
//     statusOne(){
//         if(this.props.profilesOne[0]){
//             console.log(this.props.profilesOne)
//             return this.props.profilesOne.map(profile => {
//                 return(
//                     <li className="list-group-item" onClick={()=>{this.profileInfo(profile)}}><button className="btn-success" onClick={()=>{this.setInterview(profile.id)}}>set interview</button>   {profile.firstname} {profile.lastname}</li>
//                 )
//             })
//         }
//     }
//
//     setInterview(e){
//         const data = { id: e}
//         this.props.changeStatusOne(data)
//         window.location.reload(false);
//
//     }
//
//     interviewed (e) {
//         const data = { id: e}
//         this.props.changeStatusTwo(data)
//         window.location.reload(false);
//     }
//
//     approve (e) {
//         const data = { id: e}
//         this.props.approved(data)
//         window.location.reload(false);
//     }
//
//     reject (e) {
//         const data = { id: e}
//         this.props.rejected(data)
//         window.location.reload(false);
//     }
//
//     restart (e) {
//         const data = { id: e}
//         this.props.restart(data)
//         window.location.reload(false);
//     }
//
//     statusTwo(){
//         if(this.props.profilesTwo[0]){
//
//             return this.props.profilesTwo.map(profile => {
//
//                 return(
//                     <li className="list-group-item" onClick={()=>{this.profileInfo(profile)}}><button className="btn-success" onClick={()=>{this.interviewed(profile.id)}}>interviewed</button>   {profile.firstname} {profile.lastname}</li>
//                 )
//             })
//         }
//     }
//     statusThree(){
//         if(this.props.profilesThree[0]){
//
//             return this.props.profilesThree.map(profile => {
//
//                 return(
//                     <li className="list-group-item"><button className="btn-success" onClick={()=>{this.approve(profile.id)}}>Approve</button>   <button className="btn-danger" onClick={()=>{this.reject(profile.id)}}>Reject</button>  {profile.firstname} {profile.lastname}</li>
//                 )
//             })
//         }
//     }
//     statusZero(){
//         if(this.props.profilesZero[0]){
//
//             return this.props.profilesZero.map(profile => {
//
//                 return(
//                     <li className="list-group-item"><button className="btn-success" onClick={()=>{this.restart(profile.id)}}>Restart</button>   {profile.firstname} {profile.lastname} </li>
//                 )
//             })
//         }
//     }
//     profileInfo(e){
//         console.log(e)
//         alert(
//             "Name: "+e.firstname + " " + e.lastname + "\n"  + "Skills: "+e.skills + "\n" + "Location: "+e.address + "\n" + "Interview Date: " + e.date
//         )
//     }
//
//
//     render() {
//
//         const height = {
//             height: '350px'
//         }
//
//         if (this.props.user._id && !this.props.admin){
//             this.fetchAdmin(this.props.user._id)
//         }
//         if (this.props.admin) {
//             return (
//                 <div className='container jumbotron' >
//                     <div className='text-center header'>
//                         <h1>Admin Page</h1>
//                         <Link className="nav-link naturalWHite" to="/signout">
//                             <i className="fa fa-id-badge" /><button className='btn btn-danger'>
//                             Logout</button>
//                         </Link>
//                         <br/>
//                         <br/>
//                     </div>
//                     <div className='row'>
//
//                         <div className='col-md-6' style = {height}>
//                             <div className="card text-white bg-primary mb-3">
//                                 <div className="card-header"><h3>Needs an interview</h3></div>
//                                 <ol className="list-group list-group-flush text-dark">
//                                     {this.statusOne()}
//                                 </ol>
//
//                             </div>
//                         </div>
//                         <div className='col-md-6' >
//
//                             <div className="card text-white bg-info mb-3">
//                                 <div className="card-header"><h3>Waiting for interview</h3></div>
//
//                                 <ul className="list-group list-group-flush text-dark">
//                                     {this.statusTwo()}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <div className='col-md-6'style = {height}>
//                             <div className="card text-white bg-success mb-3">
//                                 <div className="card-header"><h3>Further review</h3></div>
//
//                                 <ul className="list-group list-group-flush text-dark">
//                                     {this.statusThree()}
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className='col-md-6'>
//                             <div className="card text-white bg-secondary mb-3">
//                                 <div className="card-header"><h3>Rejected</h3></div>
//
//                                 <ul className="list-group list-group-flush text-dark">
//                                     {this.statusZero()}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//
//                 </div>
//             );
//         }else{
//             return(
//                 <div className='container'>
//                     <h1>Sorry, You dont have admin access</h1>
//
//                 </div>
//             )
//         }
//     }
//
// }
// const mapStateToProps = (state) => ({
//     profilesOne: state.adminReducer.userProfilesOne,
//     profilesTwo: state.adminReducer.userProfilesTwo,
//     profilesThree: state.adminReducer.userProfilesThree,
//     profilesZero: state.adminReducer.userProfilesZero,
//     authenticated: state.auth.authenticated,
//     user: state.fetchUserReducer.user,
//     admin: state.adminReducer.admin,
//     admin_error: state.adminReducer.admin_error
//
// })
//
// export default connect(
//     mapStateToProps,
//     {
//         getUserProfiles,
//         changeStatusOne,
//         changeStatusTwo,
//         approved,
//         rejected,
//         restart,
//         fetchUser,
//         adminSignIn,
//         signout
//     })(Index);