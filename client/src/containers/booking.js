import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';
import logo from "./../images/logo1.png"
import {connect} from "react-redux"
import {GoogleComponent} from "react-google-location";
import Confirmation from './../components/Confirmation'
import { fetchUser } from "../actions";
import env from '../app_env'



const API_KEY = env.GOOGLE_API_KEY // how to get key - step are below


class Booking extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: null,
            service: '',
            place: '',
            hour: '',
            name: '',
            email: '',
            phone: '',
            description: '',
            confirm: 0

        };
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchUser()
    }


    onChange = date => {
        this.setState({ date })
    }

    handleChange(event) {
        this.setState({service: event.target.value});
    }

    data = {}


    handleSubmit(e){
        e.preventDefault()
        this.data = {
            ...this.state,
            clientId: this.props.user._id,
            price: this.state.hour * 16
        }

        this.setState({confirm: 1})
        console.log(this.data)

    }
    

    render() {

        const imgWidth = {
            width: "30rem"
        }
        if (this.state.confirm === 0){
            return (
                <div className='container '>
                    <div className='text-center' >
                        <img className="card-img-top" src={logo} alt = '' style={imgWidth}/>

                    </div>
                    <div className='row text-center'>
                        <div className='col-md-3'>

                        </div>
                        <div className='col-md-6 jumbotron'>
                            <form>
                                <label>
                                    <p>Choose the service you need</p>

                                    <select value={this.state.service} onChange={this.handleChange}>
                                        <option value="None">Choose A Service</option>
                                        <option value="Cleaning Services">Cleaning Services</option>
                                        <option value="Waiter">Waiter</option>
                                        <option value="Dish Washer">Dish Washer</option>
                                        <option value="Cook">Cook</option>
                                        <option value="Bartender">Bartender</option>
                                        <option value="DJ">DJ</option>
                                        <option value="Photographer">Photographer</option>
                                        <option value="Videographer">Videographer</option>
                                        <option value="IT help">IT help</option>
                                        <option value="Ironing">Ironing</option>
                                        <option value="Laundry">Laundry</option>
                                        <option value="Baby Sitting">Baby Sitting</option>
                                        <option value="Pet Sitting">Pet Sitting</option>
                                        <option value="Moving & Assembly">Moving & Assembly</option>
                                        <option value="Plumbing">Plumbing</option>
                                        <option value="Mechanic">Mechanic</option>
                                        <option value="Landscaping">Landscaping</option>
                                        <option value="Front Desk">Front Desk</option>
                                        <option value="Local Tour Guide">Local Tour Guide</option>
                                        <option value="Medical Interpreter">Medical Interpreter</option>
                                        <option value="Tailoring clothes">Tailoring clothes</option>
                                        <option value="Just need someone to talk to">Just need someone to talk to</option>
                                        <option value="Product User feedback session">Product User feedback session</option>
                                        <option value="Other">Other</option>

                                    </select>
                                </label>
                                <br/>
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
                                        placeholder='Phone'
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