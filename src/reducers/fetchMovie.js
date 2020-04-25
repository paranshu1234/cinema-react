import {
  fetchMovieLoading,
  fetchMovieSuccess,
  fetchMovieError,
} from "../actions";

const initialState = {
  loading: false,
  movie: [],
  error: "",
};

const fetchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchMovieLoading:
      return {
        ...state,
        loading: true,
      };
    case fetchMovieSuccess:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    case fetchMovieError:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchMovieReducer;
