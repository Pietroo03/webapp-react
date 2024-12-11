import InfoFilm from "../components/InfoFilm"
import ReviewsFilm from "../components/ReviewsFilm"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT


export default function SingleFilm() {

    return (

        <section className="py-5">
            <div className="container-lg">
                <InfoFilm />
                <ReviewsFilm />
            </div>
        </section>

    )
}