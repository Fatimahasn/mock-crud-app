import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  UPDATE_COMMENTS,
  ADD_NEW_COMMENTS,
  DELETE_COMMENT,
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


export const getComments = (payload) => {
  return {
    type: GET_COMMENTS,
    payload,
  };
};

export const getCommentsSuccess = (payload) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload,
  };
};

export const getCommentsFail = (payload) => {
  return {
    type: GET_COMMENTS_FAIL,
    payload,
  };
};

export const updateComments = (payload) => {
  return {
    type: UPDATE_COMMENTS,
    payload,
  };
};

export const addNewComments = (payload) => {
  return {
    type: ADD_NEW_COMMENTS,
    payload,
  };
};

export const deleteComment = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload,
  };
};


