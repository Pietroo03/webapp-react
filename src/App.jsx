import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import FilmsPage from "../pages/FilmsPage"
import SingleFilm from "../pages/SingleFilm"

function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<FilmsPage />} />
            <Route path="films/:id" element={<SingleFilm />} />

          </Route>

        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
