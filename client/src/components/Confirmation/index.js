import React, { Component } from 'react';
import GoogleMaps from "../GoogleMaps"
import moment from 'moment'
import StripeCheckout from "react-stripe-checkout";
import { bookingPayment, booking, match } from "../../actions"
import {connect} from "react-redux"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import { Redirect } from "react-router-dom"

toast.configure({
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false
})

class Index extends Component {
    bookingInfo = this.props.bookingInfo


    paymentAmount = {
        darden : (this.bookingInfo.price*0.1).toFixed(2),
        dardii : (this.bookingInfo.price).toFixed(2),
        tax: (this.bookingInfo.price*0.15).toFixed(2),
        total: ((this.bookingInfo.price*0.1) + (this.bookingInfo.price) + (this.bookingInfo.price*0.15)).toFixed(2),
        productName: this.bookingInfo.service,
        hours : this.bookingInfo.hour
    }
    handleToken = (token) =>{
        const data = {
            token,
            payment: this.paymentAmount
        }
        this.props.bookingPayment(data)
        console.log(data)
    }
    successAndMatch (){

        const data = {
            ...this.bookingInfo,
            darden : (this.bookingInfo.price*0.1).toFixed(2),
            tax: (this.bookingInfo.price*0.15).toFixed(2),
            total: ((this.bookingInfo.price*0.1) + (this.bookingInfo.price) + (this.bookingInfo.price*0.15)).toFixed(2)
        }
        console.log(data)
        this.props.booking(data)
        this.props.match(data)
    }


    render(){

        console.log(this.bookingInfo)
        const textStyle = {
            color: "#C0C0C0",
            fontSize: '12px'
        }
        if (this.props.status){
            if (this.props.status.status === "succeeded"){
                this.successAndMatch()

            }else{
                toast("Something went terribly wrong! Try again later. (p.s. Don't worry we didn't charge you)",
                    { type: 'error' })
            }
        }
        if (this.props.user){
            if (this.props.user === 'success'){
                toast("Success! We'll find you a Dardii right now",
                    { type: 'success' })
                return(
                    <Redirect to='/dashboard'/>
                )
            }else {
                toast("Something went and we charged you! (p.s. Don't worry we'll refund you ASAP)",
                    {type: 'error'})
            }
        }

        return(
            <div className='jumbotron'>
                <div className='row'>
                    <div className='col-md-7 card'>
                        <br/>

                        <h3 className='text-left'>Work Order</h3>
                        <h3 className='text-right'>${this.bookingInfo.price}</h3>
                        <br/>
                        <div className='jumbotron'>
                            <h4>{this.bookingInfo.service}</h4>
                            <p style={textStyle}>{this.bookingInfo.description}</p>
                            <p>{moment(this.bookingInfo.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                            <p>{moment(this.bookingInfo.date).fromNow()}</p>
                        </div>

                        <div className='jumbotron'>
                            <div className='row'>
                                <div className='col-md-4 text-left'>
                                    <GoogleMaps coordinates = {this.bookingInfo.place.coordinates}/>
                                </div>
                                <div className='col-md-8 text-sm-left'>
                                    <p>{this.bookingInfo.place.place}</p>
                                    <p>{this.bookingInfo.name}</p>
                                    <p>{this.bookingInfo.phone}</p>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='col-md-4 container'>
                        <br/>
                        <br/>
                        <br/>
                        <div className='card container'>
                            <br/>
                            <h4>Summary</h4>
                            <p style={textStyle}>
                                Total cost includes insurance, tax, service fee, booking fee, etc
                            </p>
                            <div className='container jumbotron'>
                                <p><span className='text-left'>DarDen:</span> <span className='text-right'>${this.paymentAmount.darden}</span></p>
                                <p><span className='text-left'>DarDii:</span> <span className='text-right'>${this.paymentAmount.dardii}</span></p>
                                <p><span className='text-left'>Tax:</span> <span className='text-right'>${this.paymentAmount.tax}</span></p>
                                <hr/>
                                <p><span className='text-left'>Total:</span> <span className='text-right'>${this.paymentAmount.total}</span></p>


                            </div>


                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <StripeCheckout
                            token={this.handleToken}
                            stripeKey='pk_test_l53qXD5ejH6Aj6eR38R86ido00h6baFUeR'
                            billingAddress
                            amount={this.paymentAmount.total*100}
                            name={this.bookingInfo.service}
                        />


                    </div>
                </div>
            </div>

        )


    }

}

function mapStateToProps(state){
    return {
        status: state.paymentReducer.status.status,
        user: state.dataReducer.user

    }
}


export default connect(mapStateToProps, {bookingPayment, booking, match})(Index);