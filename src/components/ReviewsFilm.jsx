import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function ReviewsFilm() {

    const [movieData, setMovieData] = useState({})
    const { id } = useParams()

    function fetchData(url = `${API_SERVER}${API_ENDPOINT}/${id}`) {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //console.log(data);
                setMovieData(data)
            })
            .catch(error => {
                console.error('errore nel recupero dati', error);

            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderstars = (rating) => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<i key={i} className='bi bi-star-fill' style={{ color: 'gold' }}></i>)
            } else {
                stars.push(<i key={i} className='bi bi-star'></i>)
            }
        }
        return stars
    }

    return (

        <div className="reviews card mt-3">
            <h2 className="m-3">Reviews</h2>
            {movieData.reviews ?
                movieData.reviews.map((review, index) => (
                    <div className="card-body" key={index}>
                        <div className="d-flex align-items-center">
                            <span className="fs-4"><strong>{review.name}</strong></span>
                            <span className="fs-5 ms-2">{renderstars(review.vote)}</span>
                        </div>
                        <p className="fs-5">{review.text}</p>
                    </div>

                )) :
                <p>nessuna recenzione</p>
            }
        </div>
    )
}