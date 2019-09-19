import {BOOKING, BOOKING_ERROR, GET_BOOKING_ERROR, GET_BOOKING} from "../actions/types";

const initial = {
    success: '',
    error: '',
    getBooking: null,
    getBookingError: ''
}

export default function (state = initial, action){
    switch(action.type) {
        case BOOKING:
            return{...state, user: action.payload};

        case BOOKING_ERROR:
            return{...state, error: action.payload};

        case GET_BOOKING :
            return{...state, getBooking: action.payload.data};

        case GET_BOOKING_ERROR:
            return{...state, getBookingError: action.payload}
        default :
            return state;
    }
}