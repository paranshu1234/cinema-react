import React from "react";
//Framer
import { motion } from "framer-motion";

//Styles
import "./Favourite.css";

function Favourite() {
  const container = {
    show: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: {
      duration: 0.8,
    },
  };

  return (
    <motion.div
      className="fav-view-wrapper"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* <div className="fav-view-wrapper"> */}
      <motion.h1 className="fav-header" variants={item}>
        You don't have any favourites.
      </motion.h1>
      <motion.p variants={item}>
        Click the heart to add movies to favourites
      </motion.p>
      {/* </div> */}
    </motion.div>
  );
}

export default Favourite;
