const initialState = {
  loading: false,
  shows: [],
  error: "",
};

const fetchTrendingTvReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRENDINGTV_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TRENDINGTV_SUCCESS":
      return {
        ...state,
        loading: false,
        shows: action.payload,
      };
    case "FETCH_TRENDINGTV_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchTrendingTvReducer;
