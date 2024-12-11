export default function FilmCard({ Link, id }) {

    return (
        <div className="col">
            <div className="card">
                <img src="" className="card-img-top" alt="immagine copertina" />
                <div className="card-body">
                    <h5 className="card-title">Film title</h5>
                    <p className="card-text" style={{ overflowX: 'hidden' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet voluptatem consequuntur, quisquam fugit provident modi hic reprehenderit pariatur rerum.</p>
                    <Link to={`/films/${id}`} className="btn btn-primary">Check reviews!</Link>
                </div>
            </div>
        </div>
    )
}