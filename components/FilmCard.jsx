export default function FilmCard({ Link, moviesData }) {

    return (

        <section className="py-5">

            <div className="container-lg">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">

                    {moviesData.movies ?
                        moviesData.movies.map((movie, index) => (
                            <div className="col" key={index}>
                                <div className="card">
                                    <img src="" className="card-img-top" alt="immagine copertina" />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text" style={{ overflowX: 'hidden' }}>{movie.abstract}</p>
                                        <Link to={`/films/${movie.id}`} className="btn btn-primary">Check reviews!</Link>
                                    </div>
                                </div>
                            </div>

                        )) :
                        <p>Nessun film</p>
                    }

                </div>
            </div>

        </section>

    )
}