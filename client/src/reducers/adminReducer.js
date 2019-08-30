import {
    FETCH_USER_PROFILE,
    FETCH_USER_PROFILE_ERROR,
    CHANGE_STATUS_ONE_ERROR,
    CHANGE_STATUS_ONE,
    CHANGE_STATUS_TWO,
    CHANGE_STATUS_TWO_ERROR,
    ADMIN_APPROVE,
    ADMIN_APPROVE_ERROR,
    ADMIN_REJECT,
    ADMIN_REJECT_ERROR,
    ADMIN_RESTART, ADMIN_RESTART_ERROR, ADMIN, ADMIN_ERROR
} from "../actions/types";

const initial = {
    userProfilesOne :[],
    userProfilesTwo: [],
    userProfilesThree: [],
    userProfilesZero: [],
    changeStatusOne: '',
    changeStatusTwo:"",
    adminApprove:"",
    adminReject: "",
    changeStatusTwoError:'',
    adminApproveError: '',
    adminRejectError:'',
    error:'',
    changeStatusOneError: '',
    admin: '',
    admin_error: ''
}

export default function (state = initial, action) {
    switch (action.type) {
        case ADMIN:
            return{
                ...state,
                admin: action.payload
            }
        case ADMIN_ERROR:
            return{
                ...state,
                admin_error: action.payload
            }
        case FETCH_USER_PROFILE:
            return {
                ...state,
                userProfilesOne: action.payload[0],
                userProfilesTwo: action.payload[1],
                userProfilesThree: action.payload[2],
                userProfilesZero: action.payload[3],

            };

        case FETCH_USER_PROFILE_ERROR:
            return {...state, error: action.payload};
        case CHANGE_STATUS_ONE:
            return {...state, changeStatusOne: action.payload};
        case CHANGE_STATUS_ONE_ERROR:
            return {...state, changeStatusOneError: action.payload};
        case CHANGE_STATUS_TWO:
            return{...state, changeStatusTwo: action.payload};
        case CHANGE_STATUS_TWO_ERROR:
            return{...state, changeStatusTwoError:  action.payload};
        case ADMIN_APPROVE:
            return{...state, adminApprove: action.payload};
        case ADMIN_APPROVE_ERROR:
            return{...state, adminApproveError:  action.payload};
        case ADMIN_REJECT:
            return{...state, adminReject: action.payload};
        case ADMIN_REJECT_ERROR:
            return{...state, adminRejectError:  action.payload};
        case ADMIN_RESTART:
            return{...state, adminReject: action.payload};
        case ADMIN_RESTART_ERROR:
            return{...state, adminRejectError:  action.payload};
        default :
            return state;
    }
}


