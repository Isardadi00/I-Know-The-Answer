var baseURL = "http://localhost:4567";

export const registerUser = async user => {
    const res = await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    return res;
};

export const loginUser = async user => {
    const res = await fetch(`${baseURL}/login/password`, {
        'credentials': 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!res.ok) { return; }

    return await res.json();
};

export const logoutUser = async () => {
    const res = await fetch(`${baseURL}/logout`, {
        'credentials': 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) { return; }
    return res;
};

export const getUserInfo = async () => {
    const res = await fetch(`${baseURL}/user/info`, {
        'credentials': 'include',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) { return; }

    return await res.json();
};

export const getAllMatches = async () => {
    const res = await fetch(`${baseURL}/matches`, {
        'credentials': 'include',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return res;
};

export const createMatch = async match => {
    var noError = true;
    const res = await fetch(`${baseURL}/matches`, {
        'credentials': 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(match)
    });

    if (res.status !== 201) {
        noError = false;
    }

    return { res, noError };
};

export const getMatchById = async matchId => {
    const res = await fetch(`${baseURL}/matches/${matchId}`, {
        'credentials': 'include',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) { return; }

    return await res.json();
};