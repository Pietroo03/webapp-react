import { NavLink } from "react-router-dom"

export default function () {

    return (
        <header className="bg-dark p-4 shadow">
            <nav>
                <NavLink to="/" className='text-decoration-none text-white'>
                    <h1>Films</h1>
                </NavLink>
            </nav>
        </header>
    )
}