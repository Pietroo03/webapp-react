import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLoading } from "../context/LoadingContext"
import FilmCard from "../components/FilmCard"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function FilmsPage() {

    const [moviesData, setMoviesData] = useState([])
    const { startLoading, stopLoading, isLoading } = useLoading()

    function fetchData(url = API_SERVER + API_ENDPOINT) {
        startLoading()
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMoviesData(data)
            })
            .catch(error => {
                console.error('errore nel recupero dati', error);
            })
            .finally(() => {
                stopLoading()
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

            {moviesData.movies ? (
                <FilmCard Link={Link} moviesData={moviesData} />
            ) : (
                !isLoading && (
                    <div className="text-center">
                        <p>Nessun film trovato.</p>
                    </div>
                )
            )}

        </>
    )
}
