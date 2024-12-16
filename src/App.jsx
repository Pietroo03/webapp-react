import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import FilmsPage from "./pages/FilmsPage"
import SingleFilm from "./pages/SingleFilm"
import LoadingContext from "./context/LoadingContext"
import { useState } from "react"

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
