import { NavLink } from "react-router-dom"

export default function () {

    return (
        <header className="bg-dark p-4 shadow">
            <nav>
                <NavLink to="/" className='text-decoration-none text-white'>
                    <h2>Films</h2>
                </NavLink>
            </nav>
        </header>
    )
}