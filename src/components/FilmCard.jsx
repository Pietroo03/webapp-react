export default function FilmCard({ Link, moviesData }) {

    return (

        <section className="py-5">

            <div className="container-lg">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {moviesData.movies ? (
                        moviesData.movies.map((movie, index) => (
                            <div className="col" key={index}>
                                <div className="card h-100">
                                    <img src="" className="card-img-top" alt="immagine copertina" />
                                    <div className="card-body d-flex flex-column">
                                        <h2 className="card-title">{movie.title}</h2>
                                        <p className="card-text h-100 fs-5" style={{ overflowX: 'hidden' }}>{movie.abstract}</p>
                                        <div className="mt-auto text-center">
                                            <Link to={`/films/${movie.id}`} className="btn btn-primary">Check info!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Nessun film</p>
                    )}

                </div>
            </div>

        </section>

    )
}