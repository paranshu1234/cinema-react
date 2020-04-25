import fetchTrendingMoviesReducer from "./fetchTrendMov";
import fetchTrendingTvReducer from "./fetchTrendShow";
import fetchTopRatedMov from "./fetchTopMov";
import fetchMovieReducer from "./fetchMovie";
import fetchSearchReducer from "./fetchSearch";
import fetchShowReducer from "./fetchShow";
import fetchImagesReducer from "./fetchImage";
import fetchShowImagesReducer from "./fetchShowImage";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  trendingMovies: fetchTrendingMoviesReducer,
  trendingTvShows: fetchTrendingTvReducer,
  topRatedMovies: fetchTopRatedMov,
  movieData: fetchMovieReducer,
  searchData: fetchSearchReducer,
  showData: fetchShowReducer,
  imageData: fetchImagesReducer,
  showImageData: fetchShowImagesReducer,
});

export default allReducers;
