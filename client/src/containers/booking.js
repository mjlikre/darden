import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';
import logo from "./../images/logo1.png"
import {connect} from "react-redux"
import {GoogleComponent} from "react-google-location";
import {match} from "./../actions"
import env from '../app_env'



const API_KEY = env.GOOGLE_API_KEY // how to get key - step are below


class Booking extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: '',
            service: null,
            place: null,
            hour: null,
            name: null,
            email: null,
            phone: null
        };
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    onChange = date => {
        this.setState({ date })
    }

    handleChange(event) {
        this.setState({service: event.target.value});
    }


    handleSubmit(e){
        e.preventDefault()
        const data = {...this.state}
        const matchData = {
            coordinates: data.place.coordinates,
            service: data.service
        }
        console.log(data)
        // this.props.match()

    }

    render() {
        const imgWidth = {
            width: "30rem"
        }

        return (
            <div className='container text-center'>
                <div className='text-center' >
                    <img className="card-img-top" src={logo} alt = '' style={imgWidth}/>

                </div>
                <form>
                    <label>
                        <p>Choose the service you need</p>
                        <select value={this.state.service} onChange={this.handleChange}>
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
                        <p>When Do You Want It? </p>
                        <DateTimePicker
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </label>

                    <br/>
                    <label>
                        <p>How many hours you need this service for?</p>

                        <input
                            size="lg"
                            type="number"
                            value={this.state.hour}
                            onChange={(e) => { this.setState({ hour: e.target.value })}}
                        />
                    </label>
                    <br/>
                    <label>
                        <p>Your Name</p>

                        <input
                            type="text"
                            value={this.state.name}
                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                        />
                    </label>
                    <br/>
                    <label>
                        <p>Your Email</p>

                        <input
                            type="text"
                            value={this.state.email}
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                        />
                    </label>
                    <br/>
                    <label>
                        <p>Your Phone Number</p>

                        <input
                            type="text"
                            value={this.state.phone}
                            onChange={(e) => { this.setState({ phone: e.target.value }) }}
                        />
                    </label>
                    <br/>
                    <button className='btn btn-success' onClick={this.handleSubmit}>Book</button>

                </form>
            </div>

        );
    }
}

export default connect(null, {match})(Booking);