export const profile = () =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

export const register = (user) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())

export const update = (user) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/update`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())

export const logout = () =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/logout`, {
        method: 'POST',
        credentials: "include"
    })

export const login = (user) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())

export const findUserById = (userId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/users/${userId}`)
        .then(response => response.json())


// export const create

        // if (response === null) {
        //     alert("No such user e")
        // } else {
        //    return  response.json()
        // }


