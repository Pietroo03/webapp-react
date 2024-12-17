import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import LoadingContext from "../context/LoadingContext"
import InfoFilm from "../components/InfoFilm"
import ReviewsFilm from "../components/ReviewsFilm"
import ReviewForm from "../components/ReviewForm"
import Loader from "../components/Loader"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT


export default function SingleFilm() {

    const { id } = useParams()
    const [reviews, setReviews] = useState([])
    const [movieData, setMovieData] = useState({})
    const { loading, setLoading } = useContext(LoadingContext)

    function fetchData(url = `${API_SERVER}${API_ENDPOINT}/${id}`) {
        setLoading(true)
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMovieData(data)
                setReviews(data.reviews)
            })
            .catch(error => {
                console.error('errore nel recupero dati', error);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [id])



    const addReview = (newReview) => {
        console.log('nuova review aggiunta', newReview);

        fetchData()
    }

    return (

        <>

            {loading ? (
                <Loader />
            ) : (
                reviews && movieData ? (
                    <section className="py-5">
                        <div className="container-lg">
                            <ReviewForm movie_id={id} addReview={addReview} />
                            <InfoFilm movieData={movieData} setMovieData={setMovieData} />
                            <ReviewsFilm reviews={reviews} />
                        </div>
                    </section>
                ) : (

                    <div className="text-center">
                        <p>Nessun film trovato.</p>
                    </div>

                )

            )}
        </>
    )
}