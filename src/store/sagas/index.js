import { put, call, takeLatest } from "redux-saga/effects";
import { GET_POSTS, GET_COMMENTS} from "../actionTypes";
import {getPostsSuccess, getPostsFail} from "../actions/action";
import {getPosts} from "../../api/posts";
import { getCommentsSuccess, getCommentsFail } from "../actions/action";
import { getComments } from "../../api/comments";
function* onGetPosts(params) {
  try {
    const response = yield call(getPosts, params.payload);
    console.log("Response from saga:", response.data);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onGetComments(params) {
  try {
    const response = yield call(getComments, params.payload);
    console.log(response);
    yield put(getCommentsSuccess(response));
  } catch (error) {
    yield put(getCommentsFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_COMMENTS, onGetComments);
}

export default PostSaga;
