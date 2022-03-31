import { GET_MATCHES } from "../Constants/constants"
import { getAllMatches } from "../Services/requestServices";

export const getMatches = () => async dispatch => {
    const res = await getAllMatches();
    if (res.ok) {
        dispatch(setMatches(await res.json()));
    }
};

export const setMatches = matches => ({ type: GET_MATCHES, payload: matches });