import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser, makeUserProfile } from "../../actions";
import { Redirect } from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJob: [],
            skills: 0,
            interview: 0,
            agreement: 0
        };

    }
    componentDidMount() {
        this.props.fetchUser()
    }


    currentJob = []
    eachJob() {
        const jobs =['Cleaning Services', 'Waiter', 'Dish Washer', 'Cook', 'Bartender', 'DJ', 'Photographer', 'Videographer', 'IT help', 'Ironing', 'Laundry', 'Baby Sitting', 'Pet Sitting', 'moving & assembly', 'Plumbing', 'Mechanic', 'Landscaping', 'Front Desk', 'Local Tour Guide', 'Medical Interpreter', 'Tailoring clothes', 'Just need someone to talk to', 'Product User feedback session', '0ther']

        return jobs.map(job => {
            return(
                <button onClick={()=>{this.mySkills({job})}} key = {job} className="btn btn-primary">{job}</button>
            )
        })

    }
    mySkills=(e)=>{
        if(this.currentJob.length < 5 ){
            this.currentJob.push(e.job)
            this.setState({currentJob: this.currentJob})

        }else{
            alert("You've entered the maximum number of skills, delete some if you want to add more")
        }



        console.log(this.state)
    }
    displayMySkills (){
        return this.state.currentJob.map(job=>{
            return(
                <p key = {job}>{job}<button key = {job} onClick ={()=>{this.updateSkills({job})}} className="btn btn-primary">delete</button></p>
            )
        })
    }
    updateSkills(e){
        for (let i = 0; i <= this.currentJob.length; i ++){
            if (this.currentJob[i]===e.job){
                this.currentJob.splice(i, 1)
                this.setState({currentJob : this.currentJob})
            }
        }
    }
    setSkill(){
        this.setState({skills: 1});
    }
    setInterview(){
        this.setState({interview: 1})
    }
    setAgreement(){
        this.setState({agreement: 1})
        const data = this.state.currentJob
        console.log(data)
        this.props.makeUserProfile(data)
    }
    // composeUserData(){
    //     const data = {
    //         id: this.props.user._id,
    //         firstname: this.props.firstname,
    //         lastname: this.props.lastname,
    //         phone: this.props.phone,
    //         address: this.props.place,
    //         email: this.props.email,
    //         lat: this.props.lat,
    //         lng: this.props.lng,
    //         skills: this.state.currentJob
    //         approved: false,
    //     }
    // }



    render() {

        if(this.state.skills=== 0 && this.state.agreement === 0 && this.state.interview === 0){
            return (
                <div className='container'>
                    <div className='container'>
                        <h1>Welcome, {this.props.user.firstname}</h1>
                        <h4>Your Skills:</h4>
                        {this.displayMySkills()}

                        <br/>
                        <h4>Select Your Skills</h4>
                        {this.eachJob()}
                    </div>
                    <br/>
                    <br/>
                    <button className="btn btn-success" onClick={()=>{this.setSkill()}}>Next</button>


                </div>
            );
        }
        else if(this.state.skills===1 && this.state.agreement === 0 && this.state.interview === 0){
            return(
                <div>
                    <h5>Set up an interview!</h5>
                    <br/>
                    <button className="btn btn-success" onClick={()=>{this.setInterview()}}>Next</button>
                </div>

            )
        }
        else if(this.state.skills===1 && this.state.agreement === 0 && this.state.interview === 1){
            return(
                <div>
                    <button className="btn btn-success" onClick={()=>{this.setAgreement()}}>Accept Terms and conditions</button>
                </div>
            )
        }
        else{
            return(
                <Redirect to='/dashboard'/>
            )
        }


    }
}
const mapStateToProps = (state) => ({
    user: state.fetchUserReducer.user
})

export default connect(mapStateToProps, { fetchUser, makeUserProfile })(Index);