export default function Footer() {

    return (

        <footer className="bg-dark p-4 text-white">
            <div className="container-lg">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 justify-content-between">
                    <div className="col">
                        <h3>Social</h3>

                        <div className="social d-flex flex-column">
                            <i className="m-2 bi bi-facebook"> Facebook</i>
                            <i className="m-2 bi bi-twitter"> Twitter</i>
                            <i className="m-2 bi bi-instagram"> Instagram</i>
                            <i className="m-2 bi bi-pinterest"> Pinterest</i>
                            <i className="m-2 bi bi-youtube"> Youtube</i>
                        </div>

                    </div>

                    <div className="col">
                        <h3>Menù</h3>

                        <ul className="list-unstyled">
                            <li className="m-2"><a href="#" className="text-white">About</a></li>
                            <li className="m-2"><a href="#" className="text-white">Contacts</a></li>
                            <li className="m-2"><a href="#" className="text-white">Info</a></li>
                            <li className="m-2"><a href="#" className="text-white">Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}