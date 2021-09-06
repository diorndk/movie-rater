export class API {
    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }

    static registerUser(body) {
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }

    static getMovies(token) {
        return fetch("http://127.0.0.1:8000/api/movies/", {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Token ${token}`
            }
          }).then(resp => resp.json())
    }

    static getMovieDetail(mov_id, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(resp => resp.json())
    }

    static updateMovie(mov_id, body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }

    static createMovie(body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }

    static deleteMovie(mov_id, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
    }

    static rateMovie(mov_id, rate, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
                stars: rate + 1
            })
        })
    }
}