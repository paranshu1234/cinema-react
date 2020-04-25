const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const fetchTopMovReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOPMOV_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TOPMOV_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case "FETCH_TOPMOV_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchTopMovReducer;
