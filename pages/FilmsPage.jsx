import { Link } from "react-router-dom"

export default function FilmsPage() {

    return (
        <>
            <section className="py-5">

                <div className="container-lg">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                        <div className="col">
                            <div className="card">
                                <img src="" className="card-img-top" alt="immagine copertina" />
                                <div className="card-body">
                                    <h5 className="card-title">Film title</h5>
                                    <p className="card-text" style={{ overflowX: 'hidden' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet voluptatem consequuntur, quisquam fugit provident modi hic reprehenderit pariatur rerum.</p>
                                    <Link href="#" className="btn btn-primary">Check reviews!</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src="" className="card-img-top" alt="immagine copertina" />
                                <div className="card-body">
                                    <h5 className="card-title">Film title</h5>
                                    <p className="card-text" style={{ overflowX: 'hidden' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet voluptatem consequuntur, quisquam fugit provident modi hic reprehenderit pariatur rerum.</p>
                                    <Link href="#" className="btn btn-primary">Check reviews!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}