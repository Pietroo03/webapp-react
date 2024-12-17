
export default function ReviewsFilm({ reviews }) {

    const renderstars = (rating) => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<i key={i} className='bi bi-star-fill' style={{ color: 'gold' }}></i>)
            } else {
                stars.push(<i key={i} className='bi bi-star'></i>)
            }
        }
        return stars
    }

    return (

        <div className="reviews card py-0">
            <h2 className="m-3">Reviews</h2>
            {reviews ?
                reviews.map((review, index) => (
                    <div className="card-body" key={index}>
                        <hr />
                        <div className="d-flex align-items-center">
                            <div className="fs-4"><strong>{review.name}</strong></div>
                            <div className="fs-5 ps-5">{renderstars(review.vote)}</div>
                        </div>
                        <p className="fs-4 py-2">{review.text}</p>
                        <div className="fs-6">Pubblicata il {new Date(review.created_at).toLocaleDateString('it-IT')}</div>
                        <br />
                        <hr />
                    </div>

                )) :
                <p>nessuna recensione</p>
            }
        </div>
    )
}