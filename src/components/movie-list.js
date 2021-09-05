import React from 'react'

function MovieList(props) {
    return (
        <div>
          <div>
            { props.movies && props.movies.map( movie => {
              return <h2>{movie.title}</h2>
            })}
          </div>
        </div>
    )
}

export default MovieList