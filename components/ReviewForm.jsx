import { useState } from "react"

export default function ReviewForm() {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [vote, setVote] = useState(0)

    return (

        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form >

                        <label htmlFor="name">Username</label>
                        <input name="name" id="name" type="text" className="form-control" placeholder="Inserisci l'username" value={name} onChange={(e) => setName(e.target.value)} />

                        <label htmlFor="text">Review</label>
                        <input name="text" id="text" type="text" className="form-control" placeholder="Inserisci la tua recensione" value={text} onChange={(e) => setText(e.target.value)} />

                    </form>
                </div>
            </div>
        </div>
    )
}