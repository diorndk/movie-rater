import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props) {

    const mov = props.movie

    const [ highlighted, setHighlited ] = useState(-1)

    const highlightRate = high => evt => {
        setHighlited(high)
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Token 56c7b44f49cd42aa14d9e21a50072deb098b55f2'
            },
            body: JSON.stringify({
                stars: rate + 1
            })
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp)) 
        .catch(error => console.log(error))
    }
    

    return (
        <React.Fragment>
            {
                mov ? (
                    <div>
                        <h1>{mov.title}</h1>
                        <p>{mov.description}</p>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? 'orange' : ''}/>
                        {mov.no_of_ratings}
                        <div className="rate-container">
                            <h2>Rate it</h2>
                            {
                                [...Array(5)].map( (e, i) => {
                                    return <FontAwesomeIcon 
                                    key={i} 
                                    icon={faStar} 
                                    className={highlighted > i - 1 ? 'purple' : ''} 
                                    onMouseEnter={highlightRate(i)} 
                                    onMouseLeave={highlightRate(-1)}
                                    onClick={rateClicked(i)}
                                    />
                                })
                            }
                        </div>
                    </div>
                ) : null
            }
        </React.Fragment>
    )
}

export default MovieDetails