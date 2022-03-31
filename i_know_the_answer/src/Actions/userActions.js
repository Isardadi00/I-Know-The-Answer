import { SET_USER, LOGOUT_USER } from "../Constants/constants";

export const setUser = user => ({
    type: SET_USER,
    payload: user
});

export const logoutUserAction = () => {
    return {
        type: LOGOUT_USER
    }
};