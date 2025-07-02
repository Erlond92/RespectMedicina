import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthorizationPage} from "./pages/authorization/Authorization";
import {ClinicPage} from "./pages/ClinicPage/ClinicPage";
import {VisitPage} from "./pages/VisitPage/VisitPage";
import {ReviewPage} from "./pages/ReviewPage/ReviewPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AuthorizationPage />} />
        <Route path={'/clinic'} element={<ClinicPage />} />
        <Route path={'/clinic/:id'} element={<ClinicPage />} />
        <Route path={'/visits'} element={<VisitPage/>}/>
        <Route path={'/reviews'} element={<ReviewPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
