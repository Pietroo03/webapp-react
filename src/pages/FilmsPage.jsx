import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import LoadingContext from "../context/LoadingContext"
import FilmCard from "../components/FilmCard"
import Loader from "../components/Loader"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function FilmsPage() {

    const [moviesData, setMoviesData] = useState([])
    const { loading, setLoading } = useContext(LoadingContext)

    function fetchData(url = API_SERVER + API_ENDPOINT) {
        setLoading(true)
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
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

            {loading ? (
                <Loader />
            ) : (
                moviesData ? (
                    <FilmCard Link={Link} moviesData={moviesData} />
                ) : (
                    <div className="text-center">
                        <p>Nessun film trovato.</p>
                    </div>
                )
            )}


        </>
    )
}
