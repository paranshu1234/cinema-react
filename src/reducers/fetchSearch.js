import {
  fetchSearchLoading,
  fetchSearchSuccess,
  fetchSearchError,
} from "../actions";

const initialState = {
  loading: false,
  search: [],
  error: "",
};

const fetchSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchSearchLoading:
      return {
        ...state,
        loading: true,
      };
    case fetchSearchSuccess:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };

    case fetchSearchError:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default fetchSearchReducer;
