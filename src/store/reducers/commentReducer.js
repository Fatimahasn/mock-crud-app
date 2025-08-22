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

    default:
      return state;
  }
}

export default Commentreducer;
