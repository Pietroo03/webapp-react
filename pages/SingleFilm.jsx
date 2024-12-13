import InfoFilm from "../components/InfoFilm"
import ReviewsFilm from "../components/ReviewsFilm"
import ReviewForm from "../components/ReviewForm"

export default function SingleFilm() {

    return (

        <section className="py-5">
            <div className="container-lg">
                <ReviewForm />
                <InfoFilm />
                <ReviewsFilm />
            </div>
        </section>

    )
}