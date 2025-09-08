import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST
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

export const addPost = (payload) => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const updatePost = (payload) => {
  return {
    type: UPDATE_POST,
    payload,
  };
};

export const deletePost = (payload) => {
  return {
    type: DELETE_POST,
    payload,
  };
};



