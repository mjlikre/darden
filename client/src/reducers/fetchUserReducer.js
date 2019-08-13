import { FETCH_USER, USER_ERROR } from "../actions/types";

const initial = {
    user: {},
    error: ''
}

export default function (state = initial, action){
    switch(action.type) {
        case FETCH_USER:
            return{...state, user: action.payload};

        case USER_ERROR:
            return{...state, error: action.payload};
        default :
            return state;
    }
}