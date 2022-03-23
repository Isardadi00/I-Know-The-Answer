import fetch from "fetch";
var baseURL = "http://localhost:4567/api";

export const RegisterUser = async user => {
    const res = await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    console.log("Response: ", res);

};

export const LoginUser = async user => {
    // Check if password is supposed to be parameter
    const res = await fetch(`${baseURL}/login/password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    console.log("Response: ", res);
};

export const LogoutUser = async () => {

};

export const GetUserInformation = async () => {

};

export const GetAllMatches = async () => {

};

export const CreateNewMatch = async () => {

};

export const GetMatchById = async () => {

};