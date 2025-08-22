let initialState = {
  posts: [],
  loadingPosts: false,
  error: {
    message: "",
  },
};

function Postreducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        loadingPosts: true,
      };

    case "GET_POSTS_SUCCESS":
      console.log("Posts fetched successfully:", action.payload);
      return {
        ...state,
        posts: action.payload,
        loadingPosts: false,
      };

    case "GET_POSTS_FAIL":
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPosts: false,
      };
      return state;

    default:
      return state;
  }
}

export default Postreducer;
