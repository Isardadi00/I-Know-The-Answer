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
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (res.status === 401) {
        noError = false;
    }
    return { res, noError };
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
    var noError = true;
    const res = await fetch(`${baseURL}/user/info`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'withCredentials': 'include'
        }
    });
    if (res.bodyUsed === false) {
        noError = false;
    }
    return { res, noError };
};