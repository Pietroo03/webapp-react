import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FilmCard from "../components/FilmCard"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function FilmsPage() {

    const [moviesData, setMoviesData] = useState({})
    const { id } = useParams()

    function fetchData(url = API_SERVER + API_ENDPOINT) {
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
        <>
            <FilmCard Link={Link} id={id} moviesData={moviesData} />
        </>
    )
}
