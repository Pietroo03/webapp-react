import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import InfoFilm from "../components/InfoFilm"
import ReviewsFilm from "../components/ReviewsFilm"
import ReviewForm from "../components/ReviewForm"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT


export default function SingleFilm() {

    const { id } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`${API_SERVER}${API_ENDPOINT}/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data.reviews))
            .catch(err => console.log(err))
    }, [reviews])

    const addReview = (newReview) => {
        console.log('nuova review aggiunta', newReview);

        setReviews(prevReviews => [...prevReviews, newReview])
    }

    return (

        <section className="py-5">
            <div className="container-lg">
                <ReviewForm movie_id={id} addReview={addReview} />
                <InfoFilm />
                <ReviewsFilm reviews={reviews} />
            </div>
        </section>

    )
}