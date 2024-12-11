import { Link, useParams } from "react-router-dom"
import FilmCard from "../components/FilmCard"

export default function FilmsPage() {

    const { id } = useParams()

    return (
        <>
            <section className="py-5">

                <div className="container-lg">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                        <FilmCard Link={Link} id={id} />
                    </div>
                </div>

            </section>
        </>
    )
}