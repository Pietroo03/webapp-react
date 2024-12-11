import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {

    return (

        <>

            <header>
                <nav>
                    <NavLink to="/">Link Films</NavLink>
                </nav>

            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>diritti copyright</p>
            </footer>
        </>
    )
}