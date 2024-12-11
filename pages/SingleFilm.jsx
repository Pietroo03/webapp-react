import { useParams } from "react-router-dom"
import InfoFilm from "../components/InfoFilm"
import ReviewsFilm from "../components/ReviewsFilm"

export default function SingleFilm() {

    const { id } = useParams()

    return (

        <section className="py-5">
            <div className="container-lg">
                <InfoFilm />
                <ReviewsFilm />
            </div>
        </section>

    )
}