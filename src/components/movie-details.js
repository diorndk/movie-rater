import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie'
import { API } from '../api-service'

function MovieDetails(props) {

    let mov = props.movie

    const [ highlighted, setHighlited ] = useState(-1)
    const [token] = useCookies(['mr-token'])

    const highlightRate = high => evt => {
        setHighlited(high)
    }

    const rateClicked = rate => evt => {
        API.rateMovie(mov.id, rate, token['mr-token'])
        .then(() => getdetails()) 
        .catch(error => console.log(error))
    }
    
    const getdetails = () => {
        API.getMovieDetail(mov.id, token['mr-token'])
        .then(resp => props.updateMovie(resp)) 
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