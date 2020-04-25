import axios from "axios";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};

const fetchTrendingMoviesLoading = "FETCH_TRENDINGMOV_LOADING";
const fetchTrendingMoviesSuccess = "FETCH_TRENDINGMOV_SUCCESS";
const fetchTrendingMoviesError = "FETCH_TRENDINGMOV_ERROR";
const fetchTrendingTvLoading = "FETCH_TRENDINGTV_LOADING";
const fetchTrendingTvSuccess = "FETCH_TRENDINGTV_SUCCESS";
const fetchTrendingTvError = "FETCH_TRENDINGTV_ERROR";
const fetchTopRatedMoviesLoading = "FETCH_TOPMOV_LOADING";
const fetchTopRatedMoviesSuccess = "FETCH_TOPMOV_SUCCESS";
const fetchTopRatedMoviesError = "FETCH_TOPMOV_ERROR";
export const fetchMovieLoading = "FETCH_MOVIE_LOADING";
export const fetchMovieSuccess = "FETCH_MOVIE_SUCCESS";
export const fetchMovieError = "FETCH_MOVIE_ERROR";
export const fetchSearchLoading = "FETCH_SEARCH_LOADING";
export const fetchSearchSuccess = "FETCH_SEARCH_SUCCESS";
export const fetchSearchError = "FETCH_SEARCH_ERROR";
export const fetchTVShowLoading = "FETCH_TVSHOW_LOADING";
export const fetchTVShowSuccess = "FETCH_TVSHOW_SUCCESS";
export const fetchTVSHOWError = "FETCH_TVSHOW_ERROR";
export const fetchMovieImgLoading = "FETCH_MOVIEIMG_LOADING";
export const fetchMovieImgSuccess = "FETCH_MOVIEIMG_SUCCESS";
export const fetchMovieImgError = "FETCH_MOVIEIMG_ERROR";
export const fetchShowImgLoading = "FETCH_SHOWIMG_LOADING";
export const fetchShowImgSuccess = "FETCH_SHOWIMG_SUCCESS";
export const fetchShowImgError = "FETCH_SHOWIMG_ERROR";

//Movie Actions
export const fetchTrendingMovLoading = () => {
  return {
    type: fetchTrendingMoviesLoading,
  };
};

export const fetchTrendingMovSuccess = (movies) => {
  return {
    type: fetchTrendingMoviesSuccess,
    payload: movies,
  };
};

export const fetchTrendingMovError = (error) => {
  return {
    type: fetchTrendingMoviesError,
    payload: error,
  };
};

export const fetchTopMovLoading = () => {
  return {
    type: fetchTopRatedMoviesLoading,
  };
};

export const fetchTopMovSuccess = (movies) => {
  return {
    type: fetchTopRatedMoviesSuccess,
    payload: movies,
  };
};

export const fetchTopMovError = (error) => {
  return {
    type: fetchTopRatedMoviesError,
    payload: error,
  };
};

//Tv Actions
export const fetchTrendingTvShowLoading = () => {
  return {
    type: fetchTrendingTvLoading,
  };
};

export const fetchTrendingTvShowSuccess = (shows) => {
  return {
    type: fetchTrendingTvSuccess,
    payload: shows,
  };
};

export const fetchTrendingTvShowError = (error) => {
  return {
    type: fetchTrendingTvError,
    payload: error,
  };
};

//Single movie action
export const fetchMovLoading = () => {
  return {
    type: fetchMovieLoading,
  };
};

export const fetchMovSuccess = (movie) => {
  return {
    type: fetchMovieSuccess,
    payload: movie,
  };
};

export const fetchMovError = (error) => {
  return {
    type: fetchMovieError,
    payload: error,
  };
};

//Get movie images
export const fetchMovieImageLoading = () => {
  return {
    type: fetchMovieImgLoading,
  };
};

export const fetchMovieImageSuccess = (images) => {
  return {
    type: fetchMovieImgSuccess,
    payload: images,
  };
};

export const fetchMovieImageError = (error) => {
  return {
    type: fetchMovieImgError,
    payload: error,
  };
};

// Show Images
export const fetchShowImageLoading = () => {
  return {
    type: fetchShowImgLoading,
  };
};

export const fetchShowImageSuccess = (images) => {
  return {
    type: fetchShowImgSuccess,
    payload: images,
  };
};

export const fetchShowImageError = (error) => {
  return {
    type: fetchShowImgError,
    payload: error,
  };
};

//Single Show action

export const fetchShowLoading = () => {
  return {
    type: fetchTVShowLoading,
  };
};

export const fetchShowSuccess = (show) => {
  return {
    type: fetchTVShowSuccess,
    payload: show,
  };
};

export const fetchShowError = (error) => {
  return {
    type: fetchTVSHOWError,
    payload: error,
  };
};

//Search
export const fetchSearchLoad = () => {
  return {
    type: fetchSearchLoading,
  };
};

export const fetchSearchSucceed = (search) => {
  return {
    type: fetchSearchSuccess,
    payload: search,
  };
};

export const fetchSearchErr = (error) => {
  return {
    type: fetchSearchError,
    payload: error,
  };
};

export const fetchTrendingMovies = () => {
  return (dispatch) => {
    dispatch(fetchTrendingMovLoading);
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=3b475274723838227b82b215c118b7be"
      )
      .then((response) => {
        const movies = response.data;
        dispatch(fetchTrendingMovSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTrendingMovError(errorMsg));
      });
  };
};

export const fetchTrendingTv = () => {
  return (dispatch) => {
    dispatch(fetchTrendingTvShowLoading);
    axios
      .get(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=3b475274723838227b82b215c118b7be"
      )
      .then((response) => {
        const shows = response.data;
        dispatch(fetchTrendingTvShowSuccess(shows));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTrendingTvShowError(errorMsg));
      });
  };
};

export const fetchTopRatedMov = () => {
  return (dispatch) => {
    dispatch(fetchTopMovLoading);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3b475274723838227b82b215c118b7be&language=en-US&page=1"
      )
      .then((response) => {
        const movies = response.data;
        dispatch(fetchTopMovSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTopMovError(errorMsg));
      });
  };
};

export const fetchMovie = (id) => {
  return (dispatch) => {
    dispatch(fetchMovLoading);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3b475274723838227b82b215c118b7be&language=en-US`
      )
      .then((response) => {
        const movie = response.data;
        dispatch(fetchMovSuccess(movie));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchMovError(errorMsg));
      });
  };
};

export const fetchSearch = (query) => {
  return (dispatch) => {
    dispatch(fetchSearchLoad);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=3b475274723838227b82b215c118b7be&query=${query}`
      )
      .then((response) => {
        const search = response.data;
        dispatch(fetchSearchSucceed(search));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchSearchErr(errorMsg));
      });
  };
};

export const fetchShow = (id) => {
  return (dispatch) => {
    dispatch(fetchShowLoading);
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=3b475274723838227b82b215c118b7be`
      )
      .then((response) => {
        const shows = response.data;
        dispatch(fetchShowSuccess(shows));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchShowError(errMsg));
      });
  };
};

export const fetchImages = (id) => {
  return (dispatch) => {
    dispatch(fetchMovieImageLoading);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=3b475274723838227b82b215c118b7be`
      )
      .then((response) => {
        const images = response.data;
        dispatch(fetchMovieImageSuccess(images));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchMovieImageError(errorMsg));
      });
  };
};

export const fetchShowImages = (id) => {
  return (dispatch) => {
    dispatch(fetchShowImageLoading);
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/images?api_key=3b475274723838227b82b215c118b7be`
      )
      .then((response) => {
        const images = response.data;
        dispatch(fetchShowImageSuccess(images));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchShowImageError(errorMsg));
      });
  };
};
