import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function ReviewsFilm() {

    const [moviesData, setMoviesData] = useState({})
    const { id } = useParams()

    function fetchData(url = `${API_SERVER}${API_ENDPOINT}/${id}`) {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMoviesData(data)
            })
            .catch(error => {
                console.error('errore nel recupero dati', error);

            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div className="reviews card mt-3">

            {moviesData.reviews ?
                moviesData.reviews.map((review, index) => (
                    <div className="card-body">
                        <span><strong>{review.name}</strong></span>
                        <span> {review.vote}/5</span>
                        <p>{review.text}</p>
                    </div>

                )) :
                <p>nessuna recenzione</p>
            }
        </div>
    )
}