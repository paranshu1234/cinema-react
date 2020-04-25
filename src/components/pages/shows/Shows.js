import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";

import { fetchShow, fetchShowImages } from "../../../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft, faPlay } from "@fortawesome/free-solid-svg-icons";

// Animations
import { motion } from "framer-motion";

import "./Shows.css";

function Shows(props) {
  const dispatch = useDispatch();
  const showData = useSelector((state) => state.showData);
  const showImageData = useSelector((state) => state.showImageData);
  const base_url = `https://image.tmdb.org/t/p/w500`;
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(fetchShow(id));
    dispatch(fetchShowImages(id));
  }, [dispatch, id]);

  const background = base_url + showData.shows.backdrop_path;

  const loadingImg = "";

  const styles = {
    originX: 0,
    originY: 1,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url(${
      showData.shows.backdrop_path ? background : loadingImg
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
            <h1>{showData.shows.name}</h1>
            <div className="rating">
              <h2>({extractRelease(showData.shows.last_air_date)})</h2>
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
              <span className="detail-title">Seasons</span>
              <span className="detail-content">
                {showData.shows.number_of_seasons}
              </span>
            </div>
            <div className="detail">
              <span className="detail-title">Episodes</span>
              <span className="detail-content">
                {showData.shows.number_of_episodes}
              </span>
            </div>
            <div className="detail last-element">
              <span className="detail-title">Rating</span>
              <span className="detail-content">
                {showData.shows.vote_average}
              </span>
            </div>
          </div>

          <div className="gallery-wrapper">
            <span className="detail-title">Gallery</span>
            <div className="gallery">
              {showImageData.images.backdrops &&
                showImageData.images.backdrops.map((showImage) => (
                  <img
                    key={showImage.file_path}
                    src={base_url + showImage.file_path}
                    alt="movieimage"
                  />
                ))}
            </div>
            <div className="info-wrapper">
              <span className="detail-title">Genre</span>
              <div className="genre-content-wrapper">
                {showData.shows.genres &&
                  showData.shows.genres.map((genre) => (
                    <span key={genre.id} className="detail-content genre">
                      {genre.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="info-wrapper">
              <span className="detail-title">Creator</span>
              <div className="creator-content-wrapper">
                {showData.shows.created_by === undefined ||
                showData.shows.created_by === null ||
                showData.shows.created_by.length === 0
                  ? "No creator found"
                  : showData.shows.created_by.map((creator) => (
                      <span key={creator.id} className="detail-content creator">
                        {creator.name}
                      </span>
                    ))}
              </div>
            </div>
            <div className="info-wrapper">
              <span className="detail-title">Story</span>
              <p className="detail-content">{showData.shows.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shows;
