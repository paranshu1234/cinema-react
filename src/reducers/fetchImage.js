import {
  fetchMovieImgLoading,
  fetchMovieImgSuccess,
  fetchMovieImgError,
} from "../actions";

const initialState = {
  loading: false,
  images: [],
  error: "",
};

const fetchImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchMovieImgLoading:
      return {
        ...state,
        loading: true,
      };
    case fetchMovieImgSuccess:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
    case fetchMovieImgError:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchImagesReducer;
