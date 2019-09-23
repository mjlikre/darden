import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from "../actions";
import validator from 'validator';
import { Redirect } from "react-router-dom";
import { GoogleComponent } from 'react-google-location'
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

class ProviderSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
      signedUp: 0
    };
  }
  renderErrors = ({ error, touched }) => {
    if(touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, type, meta }) => {

    return (
      <div>
        <label>{label}</label>
        <input type = {type} {...input} autoComplete='off'/>
        {this.renderErrors(meta)}
      </div>
    );
  }

  onSubmit = formProps => {


    const data = {usertype: "provider", ...formProps, lat: this.state.place.coordinates.lat, lng: this.state.place.coordinates.lng, place: this.state.place.place}
    console.log(data)

    this.props.signup(data, () => {
      this.props.history.push('/hub');
    });

  }


  render() {
    const { handleSubmit } = this.props;

    if (this.state.signedUp === 0){
        return (

          <div className="container">
            <div className='row'>
              <div className='col-md-6'>
                <h1>Some images goes here</h1>
              </div>
              <div className='col-md-6 jumbotron'>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                  <fieldset>
                    <Field
                        name='email'
                        type='text'
                        label='Email'
                        component={this.renderInput}
                        autoComplete='none'/>
                  </fieldset>
                  <fieldset>
                    <Field
                        name='firstname'
                        type='text'
                        label='First Name'
                        component={this.renderInput}
                        autoComplete='none'/>
                  </fieldset>
                  <fieldset>
                    <Field
                        name='lastname'
                        type='text'
                        label='Last Name'
                        component={this.renderInput}
                        autoComplete='none'/>
                  </fieldset>
                  <fieldset>
                    <Field
                        name='phone'
                        type='text'
                        label='Phone Number'
                        component={this.renderInput}
                        autoComplete='none'/>
                  </fieldset>
                  <fieldset>
                    <Field
                        name='password'
                        type='password'
                        label='password'
                        component={this.renderInput}
                        autoComplete='none'/>
                  </fieldset>
                  <GoogleComponent

                      apiKey={API_KEY}
                      language={'en'}
                      country={'country:in|country:us'}
                      coordinates={true}
                      locationBoxStyle={'custom-style'}
                      locationListStyle={'custom-style-list'}
                      onChange={(e) => { this.setState({ place: e }) }} />

                  <button className="btn btn-primary">Signup</button>
                </form>
                {this.props.errorMessage}
              </div>
            </div>
          </div>
        )
    }
    else if(this.state.signedUp===1 && !this.props.errorMessage){
      console.log(this.props.errorMessage)
      return(
        <div>Hey</div>
      )
      // return(
      //   <Redirect to={{
      //     pathname: "/hub",
      //     state: {

      //     }
      //   }}/>
      // )
    }
     
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}


const validate = formValues => {
  const errors = {};

  if(!formValues.email) {
    errors.email = 'You must enter an email';
  }

  if(formValues.email){
    if(!validator.isEmail(formValues.email)) {
      errors.email = "You must enter a valid email address";
    }
  }

  if(!formValues.password){
    errors.password = "You must enter a password";
  }

  return errors;

};


export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({
    form: 'signup',
    validate
  })
)(ProviderSignup);









// class HomeComponent extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       place: null,
//     };
//   }
//
//
//   render() {
//     return (
//         <div >
//           <GoogleComponent
//
//               apiKey={API_KEY}
//               language={'en'}
//               country={'country:in|country:us'}
//               coordinates={true}
//               locationBoxStyle={'custom-style'}
//               locationListStyle={'custom-style-list'}
//               onChange={(e) => { this.setState({ place: e }) }} />
//         </div>
//
//     )
//   }
// }
/*id: this.props.user._id,
    firstname: this.props.user.firstname,
    lastname: this.props.user.lastname,
    phone: this.props.user.phone,
    address: this.props.user.place,
    email: this.props.user.email,
    lat: this.props.user.lat,
    lng: this.props.user.lng,
    skills: this.state.justSkills,
    agreement: this.state.agreement,
    status: this.state.status,
    aboutYou: this.state.aboutYou,
    date: this.state.date,
//
//
// export default HomeComponent;


 */