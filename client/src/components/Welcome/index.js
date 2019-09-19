import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {Link} from "react-router-dom";
import images1 from "../../images/img1.png"
import images2 from "../../images/img2.png"
import { reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin,fetchUser } from "../../actions";




class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: null,
            password: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        const data = {...this.state}
        this.props.signin(data, () => {
            this.props.fetchUser();
            this.props.history.push("/dashboard");
        });
    };

    componentDidMount() {
      if(this.props.authenticated) {
        this.props.history.push("/dashboard");
      }
    }


    render(){


        return (
            <div>
                <div className="container">
                    <div>
                        <h1>Ready to <ReactTypingEffect
                            text={["Work?", "Find Work?"]}
                        /></h1>
                    </div>
                    <div className='row'>

                        <div className='col-md-4 text-center' >
                            <img className="card-img-top" src={images1} alt = ''/>
                            <div className="card-body">
                                <Link to='/seekersignup'><button className="btn btn-primary"><h2 className="text-center">Book A Service</h2></button></Link>
                            </div>
                        </div>
                        <div className='col-md-4 text-center' >
                            <br/>
                            <br/>
                            <br/>
                            <br/>



                            <img className="card-img-top" src={images2} alt = ''/>
                            <div className="card-body">
                                <Link to='/hub'><button className="btn btn-primary"><h2 className="text-center">Provide Services</h2></button></Link>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div className='card jumbotron text-md-left'>
                                <h1>Or Just Sign In</h1>
                                <div id="first">
                                    <div className="myform form ">
                                        <form >
                                            <label>
                                                <input
                                                    type="text"
                                                    placeholder='example@email.com'
                                                    value={this.state.email}
                                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                                />
                                                Email
                                            </label>
                                            <br/>
                                            <label>
                                                <input
                                                    type="password"
                                                    placeholder='123456'
                                                    value={this.state.password}
                                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                                />
                                                Password
                                            </label>

                                            <div className='text-dark'>{this.props.errorMessage}</div>
                                            <br />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className="btn btn-primary" onClick={this.handleSubmit}><h2>Sign In</h2></button>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

        );

    }

};

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage,
        authenticated: state.auth.authenticated,

    };
}
export default compose(
    connect(
        mapStateToProps,
        { signin, fetchUser }
    ),
    reduxForm({ form: "signin" })
)(Welcome);