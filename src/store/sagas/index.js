import { put, call, takeLatest } from "redux-saga/effects";
import { GET_POSTS} from "../actionTypes";
import {getPostsSuccess, getPostsFail} from "../actions/action";
import {getPosts} from "../../api/posts";

function* onGetPosts(params) {
  try {
    const response = yield call(getPosts, params.payload);
    console.log("Response from saga:", response.data);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}


function* PostSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
}

export default PostSaga;
