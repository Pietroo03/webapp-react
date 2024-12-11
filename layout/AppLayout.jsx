import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {

    return (

        <>

            <Header />

            <main className="bg-light">
                <Outlet />
            </main>

            <footer>
                <p>diritti copyright</p>
            </footer>
        </>
    )
}