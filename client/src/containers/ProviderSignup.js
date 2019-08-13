import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from "../actions";
import validator from 'validator';



class ProviderSignup extends Component {
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

    const data = {usertype: "provider", ...formProps}
    this.props.signup(data, () => {
      this.props.history.push('/hub');
    });
  }

  render() {

      const { handleSubmit } = this.props;
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
                  <fieldset>
                    <Field
                        name='city'
                        type='text'
                        label='City'
                        component={this.renderInput}
                        autoComplete='none'/>
                  </fieldset>
                  <button className="btn btn-primary">Signup</button>
                </form>
              </div>
            </div>


          </div>
      )
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

