import { GET_MATCHES } from "../Constants/constants";

export default function (state = [], action) {
    switch (action.type) {
        case GET_MATCHES: return action.payload;
        default: return state;
    }
}