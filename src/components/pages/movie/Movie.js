import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";

import { fetchMovie, fetchImages } from "../../../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft, faPlay } from "@fortawesome/free-solid-svg-icons";

// Animations
import { motion } from "framer-motion";

import "./Movie.css";

function Movie(props) {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movieData);
  const imageData = useSelector((state) => state.imageData);
  const base_url = `https://image.tmdb.org/t/p/w500`;
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(fetchMovie(id));
    dispatch(fetchImages(id));
  }, [dispatch, id]);

  const background = base_url + movieData.movie.backdrop_path;

  const loadingImg = "";

  const styles = {
    originX: 0,
    originY: 1,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url(${
      movieData.movie.backdrop_path ? background : loadingImg
    })`,
  };

  const extractRelease = (date) => {
    if (date) {
      let hmm = date.split("");
      let sliced = hmm.slice(0, 4);
      const extracted = sliced.join("");
      return extracted;
    } else {
      return "";
    }
  };

  return (
    <div>
      <motion.header
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        style={styles}
        transition={{ type: "tween", duration: 0.2, ease: "linear" }}
        className="page-header"
      >
        <div className="back-wrapper">
          <Link to="/">
            <FontAwesomeIcon className="back-icn" icon={faLongArrowAltLeft} />
          </Link>
        </div>
        <div className="title-play-wrapper">
          <div className="title-wrapper">
            <h1>{movieData.movie.title}</h1>
            <div className="rating">
              <h2>({extractRelease(movieData.movie.release_date)})</h2>
            </div>
          </div>
          <div className="play-btn">
            <FontAwesomeIcon className="play-icn" icon={faPlay} />
          </div>
        </div>
      </motion.header>
      <div className="content-wrapper">
        <div className="content">
          <div className="details-wrapper">
            <div className="detail">
              <span className="detail-title">Length</span>
              <span className="detail-content">
                {movieData.movie.runtime} minutes
              </span>
            </div>
            <div className="detail">
              <span className="detail-title">Votes</span>
              <span className="detail-content">
                {movieData.movie.vote_count}
              </span>
            </div>
            <div className="detail last-element">
              <span className="detail-title">Rating</span>
              <span className="detail-content">
                {movieData.movie.vote_average}
              </span>
            </div>
          </div>

          <div className="gallery-wrapper">
            <span className="detail-title">Gallery</span>
            <div className="gallery">
              {imageData.images.backdrops &&
                imageData.images.backdrops.map((image) => (
                  <img
                    key={image.file_path}
                    src={base_url + image.file_path}
                    alt="movieimage"
                  />
                ))}
            </div>
            <div className="info-wrapper">
              <span className="detail-title">Genre</span>
              <div className="genre-content-wrapper">
                {movieData.movie.genres &&
                  movieData.movie.genres.map((genre) => (
                    <span key={genre.id} className="detail-content genre">
                      {genre.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="info-wrapper">
              <span className="detail-title">Tagline</span>

              <span className="detail-content">
                {movieData.movie.tagline === ""
                  ? "No Tagline"
                  : movieData.movie.tagline}
              </span>
            </div>
            <div className="info-wrapper">
              <span className="detail-title">Story</span>
              <p className="detail-content">{movieData.movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
