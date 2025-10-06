let initialState = {
  selectedPostComments: [],
  loadingSelectedPostComments: false,
  error: {
    message: "",
  },
};

function Commentreducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        loadingSelectedPostComments: true,
      };

    case "GET_COMMENTS_SUCCESS":
      return {
        ...state,
        selectedPostComments: action.payload,
        loadingSelectedPostComments: false,
      };

    case "GET_COMMENTS_FAIL":
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingSelectedPostComments: false,
      };
      break;

    case "ADD_NEW_COMMENTS":
      const nextId =
        state.selectedPostComments.length > 0
          ? state.selectedPostComments[state.selectedPostComments.length - 1]
              .id + 1
          : 1;

      const newItem = {
        postId: action.payload.postId,
        id: nextId,
        name: action.payload.postTitle,
        email: action.payload.email,
        body: action.payload.comment,
      };
      return {
        ...state,
        selectedPostComments: [...state.selectedPostComments, newItem],
      };
    case "UPDATE_COMMENTS":
      const index = state.selectedPostComments.findIndex(
        (user) => user.id === action.payload.id
      );
      const Item = {
        postId: action.payload.postId,
        id: action.payload.id,
        name: action.payload.postTitle,
        email: action.payload.email,
        body: action.payload.comment,
      };

      state.selectedPostComments[index] = Item;

      return {
        ...state,
      };

    case "DELETE_COMMENT":
      console.log("Deleting comment with ID:", action.payload);
      return {
        ...state,
        selectedPostComments: state.selectedPostComments.filter(
          (user) => user !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default Commentreducer;
