const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const fetchTrendingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRENDINGMOV_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TRENDINGMOV_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "FETCH_TRENDINGMOV_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchTrendingMoviesReducer;
