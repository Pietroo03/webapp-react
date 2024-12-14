export default function Footer() {

    return (

        <footer className="bg-dark p-4 text-white">
            <div className="container-lg">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 justify-content-between">
                    <div className="col m-2">
                        <h2 className="pb-3">Social</h2>

                        <div className="social fs-5 d-flex flex-column">
                            <i className="mb-3 bi bi-facebook"> Facebook</i>
                            <i className="mb-3 bi bi-twitter"> Twitter</i>
                            <i className="mb-3 bi bi-instagram"> Instagram</i>
                            <i className="mb-3 bi bi-pinterest"> Pinterest</i>
                            <i className="mb-3 bi bi-youtube"> Youtube</i>
                        </div>

                    </div>

                    <div className="col m-2">
                        <h2 className="pb-3">Menù</h2>

                        <ul className="list-unstyled fs-5">
                            <li className="mb-3"><a href="#" className="text-white">About</a></li>
                            <li className="mb-3"><a href="#" className="text-white">Contacts</a></li>
                            <li className="mb-3"><a href="#" className="text-white">Info</a></li>
                            <li className="mb-3"><a href="#" className="text-white">Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}