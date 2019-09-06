import React, {Component} from 'react';
import { connect } from "react-redux";
import DateTimePicker from 'react-datetime-picker';
import { fetchUser, makeUserProfile } from "../../actions";
import { Redirect } from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJob: [],
            aboutYou: '',
            description: 0,
            skills: 0,
            status: 0,
            agreement: 0,
            date: null
        };

    }
    componentDidMount() {
        this.props.fetchUser()
    }
    onChange = date => {
        this.setState({ date })
    }


    currentJob = []
    eachJob() {
        const jobs =['Cleaning Services', 'Waiter', 'Dish Washer', 'Cook', 'Bartender', 'DJ', 'Photographer', 'Videographer', 'IT help', 'Ironing', 'Laundry', 'Baby Sitting', 'Pet Sitting', 'moving & assembly', 'Plumbing', 'Mechanic', 'Landscaping', 'Front Desk', 'Local Tour Guide', 'Medical Interpreter', 'Tailoring clothes', 'Just need someone to talk to', 'Product User feedback session', 'Other']

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
                <p key = {job}><button key = {job} onClick ={()=>{this.updateSkills({job})}} className="btn btn-outline-danger">X</button>  {job}</p>
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
        this.setState({status: 1})
    }
    setAgreement(){
        this.setState({agreement: 1})

        const data = {
                    id: this.props.user._id,
                    firstname: this.props.user.firstname,
                    lastname: this.props.user.lastname,
                    phone: this.props.user.phone,
                    address: this.props.user.place,
                    email: this.props.user.email,
                    lat: this.props.user.lat,
                    lng: this.props.user.lng,
                    skills: this.state.currentJob,
                    agreement: this.state.agreement,
                    status: this.state.status,
                    aboutYou: this.state.aboutYou,
                    date: this.state.date
                }
        console.log(data)
        this.props.makeUserProfile(data)
    }

    render() {

        if(this.state.skills=== 0 && this.state.agreement === 0 && this.state.status === 0){
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
                    <div className='container'>
                        <form action="">
                                <label >
                                    About You
                                    <textarea
                                        className="form-control"
                                        rows='3'
                                        value = {this.state.aboutYou}
                                        onChange={(e) => { this.setState({ aboutYou: e.target.value })}}

                                    />
                                </label>

                        </form>
                    </div>

                    <button className="btn btn-success" onClick={()=>{this.setSkill()}}>Next</button>


                </div>
            );
        }
        else if(this.state.skills===1 && this.state.agreement === 0 && this.state.status === 0){
            return(
                <div className='container'>
                    <h5>Set up an interview!</h5>
                    <DateTimePicker
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    <br/>
                    <button className="btn btn-success" onClick={()=>{this.setInterview()}}>Next</button>
                </div>

            )
        }
        else if(this.state.skills===1 && this.state.agreement === 0 && this.state.status === 1){
            return(
                <div className='container'>
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