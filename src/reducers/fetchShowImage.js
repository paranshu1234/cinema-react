import {
  fetchShowImgLoading,
  fetchShowImgError,
  fetchShowImgSuccess,
} from "../actions";

const initialState = {
  loading: false,
  images: [],
  error: "",
};

const fetchShowImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchShowImgLoading:
      return {
        ...state,
        loading: true,
      };
    case fetchShowImgSuccess:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
    case fetchShowImgError:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default fetchShowImagesReducer;
