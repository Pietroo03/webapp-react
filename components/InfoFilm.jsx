import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function InfoFilm() {

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
        <div className="info card">

            {moviesData.movies ?
                moviesData.movies.map((movie, index) => (
                    <div className="card-body">
                        <h2>Title</h2>
                        <div><strong>Director:</strong> {movie.director}</div>
                        <div><strong>Genre:</strong> {movie.genre}</div>
                        <div><strong>Release year:</strong> {movie.release_year}</div>
                        <p><strong>Abstract:</strong> {movie.abstract}</p>
                    </div>

                )) :
                <p>nessuna info</p>
            }

        </div>
    )
}