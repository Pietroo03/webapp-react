import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import FilmsPage from "../pages/FilmsPage"

function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<FilmsPage />} />

          </Route>

        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
