import {configureStore} from "@reduxjs/toolkit";
import errorAuthorizationReducer from "./errorAuthorization";
import clinicListReducer from "./clinicList";
import pacientListReducer from "./pacientList";
import toggleReducer from "./toggle";
import doctorListReducer from "./doctorList";

export const store = configureStore({
    reducer: {
        errorAuthorization: errorAuthorizationReducer,
        clinicList: clinicListReducer.reducer,
        pacientList: pacientListReducer.reducer,
        toggle: toggleReducer,
        doctorList: doctorListReducer.reducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
