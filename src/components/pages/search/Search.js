import React, { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Animation
import { motion } from "framer-motion";

import ListCard from "../../elements/listCard/ListCard.js";

//Styles
import "./Search.css";
import { fetchSearch } from "../../../actions/index.js";

const Search = (props) => {
  const query = props.match.params.query;
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData);

  useEffect(() => {
    dispatch(fetchSearch(query));
  }, [dispatch, query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="search-heading-wrapper"
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>
          Search results for: <span>{props.match.params.query}</span>
        </h1>
      </motion.div>

      {searchData.loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="search-list-wrapper">
          {searchData &&
            searchData.search &&
            searchData.search.results &&
            searchData.search.results.map((item) => (
              <ListCard
                key={item.id}
                id={item.id}
                title={item.title}
                poster={item.poster_path}
                rating={item.vote_average}
                isMovie={true}
              />
            ))}
        </div>
      )}
    </motion.div>
  );
};

export default Search;
