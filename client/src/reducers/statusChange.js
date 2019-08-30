import { CHANGE_STATUS_ONE_ERROR, CHANGE_STATUS_ONE } from "../actions/types";

const initial = {

    changeStatusOne: '',
    changeStatusOneError: ''
}

export default function (state = initial, action) {
    switch (action.type) {

        case CHANGE_STATUS_ONE:
            return {...state, changeStatusOne: action.payload};
        case CHANGE_STATUS_ONE_ERROR:
            return {...state, changeStatusOneError: action.payload};
        // case CHANGE_STATUS_ONE:
        //     return{...state, changeStatusOne: action.payload};
        // case CHANGE_STATUS_ONE_ERROR:
        //     return{...state, changeStatusOneError:  action.payload};
        // case CHANGE_STATUS_ONE:
        //     return{...state, changeStatusOne: action.payload};
        // case CHANGE_STATUS_ONE_ERROR:
        //     return{...state, changeStatusOneError:  action.payload};
        default :
            return state;
    }
}


