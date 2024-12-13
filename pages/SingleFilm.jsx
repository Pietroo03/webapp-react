import { useParams } from "react-router-dom"
import InfoFilm from "../components/InfoFilm"
import ReviewsFilm from "../components/ReviewsFilm"
import ReviewForm from "../components/ReviewForm"

export default function SingleFilm() {

    const { id } = useParams()

    return (

        <section className="py-5">
            <div className="container-lg">
                <ReviewForm movie_id={id} />
                <InfoFilm />
                <ReviewsFilm />
            </div>
        </section>

    )
}