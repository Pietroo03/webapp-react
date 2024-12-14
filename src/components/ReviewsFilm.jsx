
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

        <div className="reviews card mt-3">
            <h2 className="m-3">Reviews</h2>
            {reviews ?
                reviews.map((review, index) => (
                    <div className="card-body" key={index}>
                        <div className="d-flex align-items-center">
                            <span className="fs-4"><strong>{review.name}</strong></span>
                            <span className="fs-5 ms-2">{renderstars(review.vote)}</span>
                        </div>
                        <p className="fs-5">{review.text}</p>
                    </div>

                )) :
                <p>nessuna recensione</p>
            }
        </div>
    )
}