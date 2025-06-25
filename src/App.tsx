import { configureStore } from "@reduxjs/toolkit";
import {errorAuthorization, clinicList, pacientList} from "./pages/redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthorizationPage} from "./pages/authorization/Authorization";
import {ClinicPage} from "./pages/ClinicPage/ClinicPage";
import {VisitPage} from "./pages/VisitPage/VisitPage";


export const store = configureStore({
  reducer: {
    errorAuthorization: errorAuthorization.reducer,
    clinicList: clinicList.reducer,
    pacientList: pacientList.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<AuthorizationPage />} />
          <Route path={'/clinic'} element={<ClinicPage />} />
            <Route path={'/clinic/:id'} element={<VisitPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
