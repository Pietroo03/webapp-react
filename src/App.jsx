import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import FilmsPage from "../pages/FilmsPage"
import SingleFilm from "../pages/SingleFilm"
import { LoadingProvider, useLoading } from "../context/LoadingContext"

function Loadingmessage() {
  const { isLoading } = useLoading()

  if (!isLoading) return null

  return (
    <div className="loading-overlay">
      <div className="loading-message">Caricamento in corso ...</div>
    </div>
  )
}

function App() {

  return (

    <>
      <LoadingProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<AppLayout />}>
              <Route index element={<FilmsPage />} />
              <Route path="films/:id" element={<SingleFilm />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </LoadingProvider>

    </>

  )
}

export default App
