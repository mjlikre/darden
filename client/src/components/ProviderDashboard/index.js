import React, {Component} from 'react';
import ProviderNavbar from "../MainNavbar/providerNavbar";

class Index extends Component {
    render() {
        return (
            <div>
                <ProviderNavbar/>
                <div className='container'>
                    <h1>hey</h1>
                </div>

            </div>
        );
    }
}


// const mapStateToProps = (state) => ({
//     bookings: state.dataReducer.getBooking,
//     bookingError: state.dataReducer.getBookingError
// })
export default Index;