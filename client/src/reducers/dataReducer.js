import {BOOKING, BOOKING_ERROR} from "../actions/types";

const initial = {
    success: '',
    error: ''
}

export default function (state = initial, action){
    switch(action.type) {
        case BOOKING:
            return{...state, user: action.payload};

        case BOOKING_ERROR:
            return{...state, error: action.payload};
        default :
            return state;
    }
}