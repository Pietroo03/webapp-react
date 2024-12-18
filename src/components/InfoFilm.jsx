import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function InfoFilm({ movieData, setMovieData }) {

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

    return (
        <div className="info card mb-4">

            <div className="card-body">
                <h2 className="mb-3">{movieData.title}</h2>
                <div className="fs-4"><strong>Director:</strong> {movieData.director}</div>
                <div className="fs-4"><strong>Genre:</strong> {movieData.genre}</div>
                <div className="fs-4"><strong>Release year:</strong> {movieData.release_year}</div>
                <p className="fs-4"><strong>Abstract:</strong> {movieData.abstract}</p>
            </div>

        </div>
    )
}