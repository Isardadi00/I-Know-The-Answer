import { SET_USER, LOGOUT_USER } from "../Constants/constants";

export default function (state = {}, action) {
    switch (action.type) {
        case SET_USER: return action.payload;
        case LOGOUT_USER: return {};
        default: return state;
    }
}