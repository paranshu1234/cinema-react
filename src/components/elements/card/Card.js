import React from "react";
import { Link } from "react-router-dom";

//Framer animations
import { motion } from "framer-motion";

// Styles
import "./Card.css";

function Card({ title, rating, poster, id, isMovie }) {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: {
      duration: 0.2,
    },
  };

  const showLink = `/shows/${id}`;
  const movieLink = `/movie/${id}`;

  const base_url = `https://image.tmdb.org/t/p/w200`;

  const updateTitle = (title, limit) => {
    let splitWords = title.split(" ");
    if (splitWords.length > limit) {
      let removeWords = splitWords.slice(0, limit);
      removeWords.push("...");
      const updatedTitle = removeWords.join(" ");
      return updatedTitle;
    } else {
      return title;
    }
  };

  return (
    <Link className="link-styles" to={isMovie ? movieLink : showLink}>
      <motion.div variants={item} className="card-wrapper">
        <img className="gallery-img-itm" src={base_url + poster} alt="cover" />
        <h2>{updateTitle(title, 4)}</h2>
        {/* <span>
          <FontAwesomeIcon className="star-icn" icon={faStar} /> {rating}
        </span> */}
        <div className="rating-wrapper">{rating}</div>
      </motion.div>
    </Link>
  );
}

export default Card;
