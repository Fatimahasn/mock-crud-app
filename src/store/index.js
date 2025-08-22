import {createStore, compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import rootreducer from '../store/reducers/index';
import storage from "redux-persist/es/storage";

import rootSaga from "./sagas/saga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const middleware= [];
middleware.push(sagaMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const config = {
  key: "root",
  storage,
  whitelist: ["getPosts"],
};
const persistedReducer = persistReducer(config, rootreducer);
const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default store;