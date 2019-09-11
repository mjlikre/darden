import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';
import {connect} from "react-redux"
import {GoogleComponent} from "react-google-location";
import Confirmation from './../components/Confirmation'
import { fetchUser } from "../actions";
import waiter from "./../images/waiter.png"
import pet from "./../images/pet.png"
import cleaning from "./../images/cleaning.png"
import mental from "./../images/mental.png"
import laundry from "./../images/laundry.png"
import personalTrainer from "./../images/personalTrainer.png"
import dishwasher from "./../images/dishwasher.png"
import babysitting from "./../images/babysitting.png"
import moving from "./../images/moving.png"
import uuid from "uuid"
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY // how to get key - step are below


class Booking extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: null,
            service: null,
            place: '',
            hour: '',
            name: '',
            email: '',
            phone: '+1',
            description: '',
            confirm: 2

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchUser()
    }
    imgWidth = {
        height: "210.66px"
    }

    topImg = {
        width: '174.66px'
    }


    onChange = date => {
        this.setState({ date })
    }

    selectSkill(){
        if(this.state.service){
            return(
                <div>
                    <div className='card' >
                        <img className='card-img-top' src={this.state.service.img} alt=""/>

                    </div>
                    <h4>{this.state.service.skillName}</h4>
                    <br/>
                    <br/>
                    <br/>
                    <button className='btn btn-success' onClick={()=>{this.setState({confirm: 0})}}>Proceed</button>

                </div>

            )
        }

    }





    handleSubmit(e){
        e.preventDefault()
        this.data = {
            date: this.state.date,
            service: this.state.service.skillName,
            place: this.state.place,
            hour: this.state.hour,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            description: this.state.description,
            confirm: this.state.confirm,
            clientId: this.props.user._id,
            price: this.state.hour * 16,
            bookingId: uuid()
        }

        this.setState({confirm: 1})
        console.log(this.data)

    }
    

    render() {
        if (this.state.confirm === 2){
            return (
                <div className='container' >

                    <div className='row'>


                        <div className='col-md-8'>
                            <h2 className='ml-auto'>Select A Service:</h2>
                            <br/>
                            <br/>
                            <div className='row'>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "Cleaning", img: '/static/media/cleaning.f15b51f4.png'}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={cleaning} alt=""/>
                                    </div>
                                    <h4>Cleaning</h4>

                                </div>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "Waiter", img: '/static/media/waiter.c926a04c.png'}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={waiter} alt=""/>
                                    </div>
                                    <h4>Waiter</h4>

                                </div>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "DishWasher", img: "/static/media/dishwasher.9132659f.png"}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={dishwasher} alt=""/>
                                    </div>
                                    <h4>DishWasher</h4>

                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "Laundry", img: "/static/media/laundry.6f097540.png"}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={laundry} alt=""/>
                                    </div>
                                    <h4>Laundry</h4>

                                </div>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "Baby Sitting", img: "/static/media/babysitting.ffb982a2.png"}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={babysitting} alt=""/>
                                    </div>
                                    <h4>Baby Sitting</h4>

                                </div>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "Pet Sitting", img: "/static/media/pet.4013a9b6.png"}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={pet} alt=""/>
                                    </div>
                                    <h4>Pet Sitting</h4>

                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "Moving & Assembly", img: "/static/media/moving.27e02986.png"}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={moving} alt=""/>
                                    </div>
                                    <h4>Moving & Assembly</h4>

                                </div>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "Personal Trainer", img: "/static/media/personalTrainer.4f8096f0.png"}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={personalTrainer} alt=""/>
                                    </div>
                                    <h4>Personal Trainer</h4>

                                </div>
                                <div className='col-md-4 container'>
                                    <div className='card' onClick={()=>{this.setState( {service: {skillName: "Mental Health Drama Airout", img: "/static/media/mental.e3d4af1a.png"}})}}>
                                        <img style={this.imgWidth} className='card-img-top' src={mental} alt=""/>
                                    </div>
                                    <h4>Mental Health Drama Airout</h4>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 container'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>



                            {this.selectSkill()}
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.confirm === 0){
            return (
                <div className='container '>
                    <div className='text-center' >
                        <img className="card-img-top" src={this.state.service.img} alt = '' style={this.topImg}/>
                        <h3>{this.state.service.skillName}</h3>

                    </div>
                    <div className='row text-center'>
                        <div className='col-md-3'>

                        </div>
                        <div className='col-md-6 jumbotron'>
                            <form>

                                <label>
                                    <p>What's Your Location?</p>
                                    <GoogleComponent

                                        apiKey={API_KEY}
                                        language={'en'}
                                        country={'country:in|country:us'}
                                        coordinates={true}
                                        locationBoxStyle={'custom-style'}
                                        locationListStyle={'custom-style-list'}
                                        onChange={(e) => { this.setState({ place: e }) }} />
                                </label>
                                <br/>
                                <label>
                                    <p>When Do You Want It?</p>
                                    <DateTimePicker
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    />
                                </label>

                                <br/>
                                <label>

                                    Work Description
                                    <textarea
                                        className="form-control"
                                        value = {this.state.description}
                                        onChange={(e) => { this.setState({ description: e.target.value })}}

                                    />

                                </label>
                                <br/>
                                <label>

                                    Hours needed($16.00/hour)

                                    <input
                                        className="form-control"
                                        placeholder='Hours'
                                        type="number"
                                        value={this.state.hour}
                                        onChange={(e) => { this.setState({ hour: e.target.value })}}
                                    />
                                </label>
                                <br/>

                                <label>

                                    Your Name
                                    <input
                                        className="form-control"
                                        placeholder='Name'
                                        type="text"
                                        value={this.state.name}
                                        onChange={(e) => { this.setState({ name: e.target.value }) }}
                                    />
                                </label>
                                <br/>
                                <label>
                                    Your Email

                                    <input
                                        className="form-control"
                                        placeholder='Email'
                                        type="text"
                                        value={this.state.email}
                                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                                    />
                                </label>
                                <br/>
                                <label>
                                    Your Phone Number

                                    <input
                                        className="form-control"
                                        placeholder='+1 123 456 7890'
                                        type="text"
                                        value={this.state.phone}
                                        onChange={(e) => { this.setState({ phone: e.target.value }) }}
                                    />
                                </label>
                                <br/>
                                <button className='btn btn-success' onClick={this.handleSubmit}>Proceed</button>
                            </form>
                        </div>
                    </div>


                </div>
            )
        }
        else if(this.state.confirm === 1){
            return(
                <div className='container'>
                    <Confirmation bookingInfo = {this.data}/>
                </div>
                )

        }

    }
}
const mapStateToProps = (state) => ({
    user: state.fetchUserReducer.user
})

export default connect(mapStateToProps, {fetchUser})(Booking);