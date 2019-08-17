import { USER_PROFILE, USER_PROFILE_ERROR } from "../actions/types";

const initial = {
    profile: [],
    profileError: ''
}

export default function (state = initial, action){
    switch(action.type) {
        case USER_PROFILE:
            return{...state, profile: action.payload};
        case USER_PROFILE_ERROR:
            return{...state, profileError: action.payload };
        default:
            return state;
    }
}