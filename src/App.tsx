import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthorizationPage} from "./pages/authorization/Authorization";
import {ClinicPage} from "./pages/ClinicPage/ClinicPage";
import {VisitPage} from "./pages/VisitPage/VisitPage";
import {ReviewPage} from "./pages/ReviewPage/ReviewPage";
import {AnaliticPage} from "@/pages/AnaliticPage/AnaliticPage.tsx";
import {PushPage} from "@/pages/PushPage/PushPage.tsx";
import {ClinicOperato} from "@/pages/ClinicOperator/ClinicOperator.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AuthorizationPage />} />
        <Route path={'/clinic'} element={<ClinicPage />} />
        <Route path={'/clinic/:id'} element={<ClinicPage />} />
        <Route path={'/visits'} element={<VisitPage/>}/>
        <Route path={'/reviews'} element={<ReviewPage/>}/>
        <Route path={'/analitic'} element={<AnaliticPage/>}/>
        <Route path={'/analitic/:id'} element={<AnaliticPage />} />
				<Route path={'/clinicOperator/'} element={<ClinicOperato clinicId={1} />} />
        <Route path={'/push'} element={<PushPage name={"Наталья"} title={'Main'} />} />
        <Route path={'/push/like'} element={<PushPage name={"Наталья"} title={'Like'} />} />
        <Route path={'/push/claim'} element={<PushPage name={"Наталья"} title={'Claim'} />} />
        <Route path={'/push/respert'} element={<PushPage name={"Наталья"} title={'Respect'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
