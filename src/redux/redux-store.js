import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import sagaFunction from "./saga";
import rootReducer from "./rootReducer";
const sagaMiddleware = createSagaMiddleWare();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(sagaFunction);
export default store;
