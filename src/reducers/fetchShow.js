import {
  fetchTVShowLoading,
  fetchTVSHOWError,
  fetchTVShowSuccess,
} from "../actions";

const initialState = {
  loading: false,
  shows: [],
  error: "",
};

const fetchShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchTVShowLoading:
      return {
        loading: true,
      };
    case fetchTVShowSuccess:
      return {
        ...state,
        loading: false,
        shows: action.payload,
      };
    case fetchTVSHOWError:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchShowReducer;
