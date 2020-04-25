import React from "react";
import { Link } from "react-router-dom";

//Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./ListCard.css";

const base_url = `https://image.tmdb.org/t/p/w200`;

function ListCard({ title, poster, rating, id, isMovie }) {
  const showLink = `/shows/${id}`;
  const movieLink = `/movie/${id}`;

  return (
    <Link className="link-styles" to={isMovie ? movieLink : showLink}>
      <div className="list-card-wrapper">
        {poster ? (
          <img className="list-card-img" src={base_url + poster} alt="list" />
        ) : (
          <div className="place-card"></div>
        )}
        <div className="list-card-content-wrapper">
          <h3 className="list-card-title">{title}</h3>
          <div className="list-card-rating-wrapper">
            <span>
              <FontAwesomeIcon className="star-icn" icon={faStar} /> {rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListCard;
