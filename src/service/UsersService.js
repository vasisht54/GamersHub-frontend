import React from 'react';

export const createUser = async (user) => {

    const response = await fetch('https://gamershub-server-jpa.herokuapp.com/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const findAllUsers = async () => {

    const response = await fetch('https://gamershub-server-jpa.herokuapp.com/api/users')

    return await response.json()
}


export const findUserById = async (id) => {

    const response = await fetch(`https://gamershub-server-jpa.herokuapp.com/api/users/${id}`)

    return await response.json()
}

export const updateUser = (id, user) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
        })
        .then(response => response.json())

export const deleteUser = (id) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/users/${id}`, {
        method: 'DELETE'
        })
        .then(response => response.json())

