import {configureStore} from "@reduxjs/toolkit";
import errorAuthorizationReducer from "./errorAuthorization";
import clinicListReducer from "./clinicList";
import pacientListReducer from "./pacientList";
import doctorListReducer from "./doctorList";
import reviewReducer from './review';
import infoVisit from "./infoVisit.ts";
import operatorList from "@/redux/operatorList.ts";

export const store = configureStore({
	reducer: {
		errorAuthorization: errorAuthorizationReducer,
		clinicList: clinicListReducer.reducer,
		reviewList: reviewReducer.reducer,
		pacientList: pacientListReducer.reducer,
		doctorList: doctorListReducer.reducer,
		infoVisit: infoVisit.reducer,
		operatorList: operatorList.reducer,
	},
})
export type RootState = ReturnType<typeof store.getState>
