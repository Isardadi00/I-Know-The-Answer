var baseURL = "http://localhost:4567";

export const registerUser = async user => {
    var noError = true;
    const res = await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (res.status !== 201) {
        noError = false;
    }
    return { res, noError };
};

export const loginUser = async user => {
    var noError = true;
    const res = await fetch(`${baseURL}/login/password`, {
        'credentials': 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json());

    if (res.status === 401){
        noError = false;
    }
    
    return {res, noError};
};

export const logoutUser = async () => {
    var noError = true;
    const res = await fetch(`${baseURL}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.status !== 200) {
        noError = false;
    }
    return { res, noError };
};

export const getUserInfo = async () => {
    const res = await fetch(`${baseURL}/user/info`, {
        'credentials': 'include',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    return res;
};