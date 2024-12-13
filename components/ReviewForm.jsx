import { useState } from "react"

export default function ReviewForm() {

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

    }

    return (

        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form onClick={HandleFormSubmit}>

                        <label htmlFor="name">Username</label>
                        <input name="name" id="name" type="text" className="form-control" placeholder="Inserisci l'username" value={name} onChange={(e) => setName(e.target.value)} />

                        <label htmlFor="text">Review</label>
                        <input name="text" id="text" type="text" className="form-control" placeholder="Inserisci la tua recensione" value={review} onChange={(e) => setReview(e.target.value)} />

                        <button type="submit" className="btn btn-dark">Invia recensione</button>

                    </form>
                </div>
            </div>
        </div>
    )
}