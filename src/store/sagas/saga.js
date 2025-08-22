import { all, fork } from "redux-saga/effects";

import PostSaga from "./index";

export default function* rootSaga() {
  yield all([fork(PostSaga)]);
}