import { useState } from "react"

const API_SERVER = import.meta.env.VITE_API_SERVER
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export default function ReviewForm({ movie_id }) {

    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [vote, setVote] = useState(0)

    function HandleFormSubmit(e) {
        e.preventDefault()
        console.log('form works');

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
                console.log(data);
            })
            .catch(err => console.log(err)
            )

    }

    return (

        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={HandleFormSubmit}>

                        <label htmlFor="name">Username</label>
                        <input name="name" id="name" type="text" className="form-control" placeholder="Inserisci l'username" value={name} onChange={(e) => setName(e.target.value)} />

                        <div className="rating my-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= vote ? '-fill' : ''} `} onClick={() => setVote(n)}></i>)}
                        </div>

                        <label htmlFor="review">Review</label>
                        <input name="review" id="text" type="text" className="form-control" placeholder="Inserisci la tua recensione" value={review} onChange={(e) => setReview(e.target.value)} />

                        <button type="submit" className="btn btn-dark">Invia recensione</button>

                    </form>
                </div>
            </div>
        </div>
    )
}