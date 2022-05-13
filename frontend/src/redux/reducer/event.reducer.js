import { eventConstants } from "../actions/constants"

const initState = {
    resultDay:[],
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
};

export default (state = initState, action) => {

    console.log(action);

    switch (action.type) {
        case eventConstants.EVENT_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case eventConstants.EVENT_SUCCESS:
            state = {
                ...state,
                resultDay: action.payload.resultDay,
                authenticate: true,
                authenticating: false
            }
            break;
    }


    return state;
}