import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import FilmsPage from "./pages/FilmsPage"
import SingleFilm from "./pages/SingleFilm"
import LoadingContext from "./context/LoadingContext"
import { useState } from "react"
//import { LoadingProvider, useLoading } from "./context/LoadingContext"

/* function Loadingmessage() {
  const { isLoading } = useLoading()

  if (!isLoading) return null

  return (
    <div className="loading-overlay position-fixed top-0 left-0 w-100 h-100 bg-light d-flex justify-content-center align-items-center">
      <div className="loading-message fs-3">Caricamento in corso ...</div>
    </div>
  )
} */

function App() {

  const [loading, setLoading] = useState(false)

  const values = {
    loading,
    setLoading
  }

  return (

    <>

      <LoadingContext.Provider value={values}>
        <BrowserRouter>
          <Routes>

            <Route element={<AppLayout />}>
              <Route index element={<FilmsPage />} />
              <Route path="films/:id" element={<SingleFilm />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </LoadingContext.Provider>

    </>

  )
}

export default App
