import { SET_USER, LOGOUT_USER } from "../Constants/constants";
import { logoutUser } from "../Services/requestServices";

export const setUser = user => ({
    type: SET_USER,
    payload: user
});

export const logoutUserAction = () => {
    return {
        type: LOGOUT_USER
    }
};