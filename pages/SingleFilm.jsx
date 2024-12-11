import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import InfoFilm from "../components/InfoFilm"
import ReviewsFilm from "../components/ReviewsFilm"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT


export default function SingleFilm() {

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

        <section className="py-5">
            <div className="container-lg">
                <InfoFilm />
                <ReviewsFilm />
            </div>
        </section>

    )
}