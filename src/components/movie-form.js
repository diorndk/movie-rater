import React from 'react'

function MovieForm(props) {
    const mov = props.movie

    return (
        <React.Fragment>
            {
                mov ? (
                    <h1>{props.movie && props.movie.title} edit</h1>
                ) : null
            }
        </React.Fragment>
    )
}

export default MovieForm