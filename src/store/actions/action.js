import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "../actionTypes";


export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getPostsSuccess = (payload) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload,
  };
};

export const getPostsFail = (payload) => {
  return {
    type: GET_POSTS_FAIL,
    payload,
  };
};


