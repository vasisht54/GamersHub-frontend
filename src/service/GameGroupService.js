export const createGroup = (group, userId, gameId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/users/${userId}/games/${gameId}/gameGroups`, {
        method: 'POST',
        body: JSON.stringify(group),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())


export const findAllGroups = () =>
    fetch("https://gamershub-server-jpa.herokuapp.com/api/gameGroups")
        .then(response=>response.json())

export const findUsersInGroup= (gameGroupId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/${gameGroupId}/users`)
        .then(response => response.json())

export const getGroupAdmin = (gameGroupId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/${gameGroupId}/groupAdmin`)
        .then(response => response.json())


export const addUserToGameGroup = (gameGroupId,userId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/${gameGroupId}/users/${userId}`,
          {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              credentials: "include"
          }).then(response => response.json())

export const getUserMemberGroups = (userId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/users/${userId}/userMembershipGroups`)
        .then(response => response.json())


export const getUserAdminGroups = (userId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/users/${userId}/userAdminGroups`)
        .then(response => response.json())


export const groupUpdate = (group,groupId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/${groupId}`, {
        method: 'PUT',
        body: JSON.stringify(group),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())


export const deleteUserFromGroup = (gameGroupId,userId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/${gameGroupId}/users/${userId}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })

export const deleteGroup = (gameGroupId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/${gameGroupId}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })

export const findGroupsByGameName = (gameName) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/name/${gameName}`)
        .then(response => response.json())

export const findGroupsByGroupId = (gameGroupId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/${gameGroupId}`)
        .then(response => response.json())

export default {
    findGroupsByGameName,
    findGroupsByGroupId
}

