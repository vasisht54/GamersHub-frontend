// export const findAllGame = () =>
//     fetch('https://api.rawg.io/api/games?search=${title}')
//         .then(response => response.json())

export const findGameByName = (title) =>
    fetch(`https://api.rawg.io/api/games?search=${title}`)
        .then(response => response.json())

export const findGameById = (gameId) =>
    fetch(`https://api.rawg.io/api/games/${gameId}`)
        .then(response => response.json())

export const getGameIdForGroup = (groupId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/gameGroups/${groupId}/gameId`)
        .then(response => response.json())

export const findGameByIdFromGroup = (gameId) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/games/${gameId}/`)
        .then(response => response.json())

export const getAllGames = () =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/games`)
        .then(response => response.json())

export const findMyGameByName = (name) =>
    fetch(`https://gamershub-server-jpa.herokuapp.com/api/games/name/${name}`)
        .then(response => response.json())

export default {
    findGameByName,
    findGameById
}
