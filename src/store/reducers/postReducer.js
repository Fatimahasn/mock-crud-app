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
    case "ADD_POST":
      const nextPostId =
        state.posts.length > 0 ? state.posts[state.posts.length - 1].id + 1 : 1;
      const newPost = {
        id: nextPostId,
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case "UPDATE_POST":
      const updatedItem = {
        id: action.payload.id,
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
      };

      // Put the updated item at the start of the posts array
      return {
        ...state,
        posts: [updatedItem, ...state.posts],
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((user) => user.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export default Postreducer;
