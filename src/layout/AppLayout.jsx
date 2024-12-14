import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout() {

    return (

        <>

            <Header />

            <main className="bg-light min-vh-100">
                <Outlet />
            </main>

            <Footer />

        </>

    )
}