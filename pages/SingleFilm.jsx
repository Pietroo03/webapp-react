import { useParams } from "react-router-dom"

export default function SingleFilm() {

    const { id } = useParams()

    return (

        <section className="py-5">
            <div className="container-lg">
                <div className="info card">
                    <div className="card-body">
                        <h2>Title</h2>
                        <div><strong>Director:</strong> director</div>
                        <div><strong>Genre:</strong> genre</div>
                        <div><strong>Release year:</strong> year</div>
                        <p><strong>Abstract:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis, cupiditate quo expedita saepe obcaecati, modi et rem numquam repellendus enim officia earum quae repellat eveniet. Assumenda laboriosam accusamus a!</p>
                    </div>
                </div>
            </div>
        </section>

    )
}