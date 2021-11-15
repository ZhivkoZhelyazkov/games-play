const baseUrl = 'http://localhost:3030/data';

export function getAll() {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`)
        .then(response => response.json());
};


export const getOne = (id) => fetch(`${baseUrl}/games/${id}`)
    .then(response => response.json());


export const getLatest = () => {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(response => response.json());
};