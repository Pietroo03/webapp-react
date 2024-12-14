import { useState, useEffect } from "react"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function ReviewForm({ movie_id, addReview }) {

    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [vote, setVote] = useState(0)

    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none')
    }

    function HandleFormSubmit(e) {
        e.preventDefault()

        const formData = {
            name,
            text: review,
            vote
        }

        console.log(formData);

        fetch(`${API_SERVER}${API_ENDPOINT}/${movie_id}/review`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    addReview(data)
                } else {
                    console.log('no review data returned');
                }
            })
            .catch(err => console.log(err)
            )

        setName('')
        setReview('')
        setVote(0)

    }

    useEffect(() => {

    }, [])

    return (

        <>

            <div className="text-center">
                <button onClick={HandleFormToggle} className="btn btn-dark mb-3 fs-5">Lascia una recensione!</button>
            </div>

            <div id="form-card" className="card mb-3">
                <div className="card-body">
                    <form onSubmit={HandleFormSubmit}>

                        <label htmlFor="name" className="pb-2 fs-4"><strong>Username</strong></label>
                        <input name="name" id="name" type="text" className="form-control fs-5" placeholder="Inserisci l'username ..." value={name} onChange={(e) => setName(e.target.value)} />

                        <div className="rating my-3 text-warning fs-4">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= vote ? '-fill' : ''} `} onClick={() => setVote(n)}></i>)}
                        </div>

                        <label htmlFor="review" className="pb-2 fs-4"> <strong>Review</strong></label>
                        <textarea name="review" id="text" type="text" className="form-control fs-5" placeholder="Inserisci la tua recensione ..." value={review} onChange={(e) => setReview(e.target.value)} />

                        <button type="submit" className="btn btn-dark mt-3 fs-5">Invia recensione</button>

                    </form>
                </div>
            </div>
        </>
    )
}