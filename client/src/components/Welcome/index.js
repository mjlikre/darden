import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {Link} from "react-router-dom";
import images1 from "../../images/img1.png"
import images2 from "../../images/img2.png"


class Welcome extends Component {

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
                        <div className='col-md-4'>

                        </div>
                        <div className='col-md-4 text-center' >

                            <img className="card-img-top" src={images2} alt = ''/>
                            <div className="card-body">
                                <Link to='/signup'><button className="btn btn-primary"><h2 className="text-center">Provide Services</h2></button></Link>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className='row'>
                        <div className='col-md-4'>

                        </div>
                        <div className='col-md-4 text-center'>
                            <div className="card-body">
                                <Link to='/signIn'><button className="btn btn-primary"><h1 className="text-center">Sign In</h1></button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );

    }

};

export default Welcome;