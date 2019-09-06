import { PAYMENT, PAYMENT_ERROR } from "../actions/types";

const initial = {
    status: '',
    err: ''
}

export default function (state = initial, action){
    switch (action.type) {
        case PAYMENT:
            return{...state, status: action.payload  };
        case PAYMENT_ERROR:
            return{...state, err: action.payload};
        default:
            return state;

    }
}