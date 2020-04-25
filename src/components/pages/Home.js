import React, { useEffect, useState } from "react";

//Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//Components
import Card from "../elements/card/Card";
import ListCard from "../elements/listCard/ListCard";

//Framer animations
import { motion } from "framer-motion";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrendingMovies,
  fetchTrendingTv,
  fetchTopRatedMov,
} from "../../actions";

const Home = (props) => {
  const [isToggled, setToggle] = useState(false);
  const [searchQuery, setQuery] = useState("");

  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.trendingMovies);
  const trendingTvShows = useSelector((state) => state.trendingTvShows);
  const topRatedMovies = useSelector((state) => state.topRatedMovies);

  const variants = {
    active: {
      opacity: 1,
      x: "-32px",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 16,
      },
    },
    inActive: {
      opacity: 0,
      x: "-10px",
      scale: 0,
    },
  };

  const container = {
    hidden: {
      opacity: 0,
      x: "20px",
    },
    show: {
      opacity: 1,
      x: "0px",
    },
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (searchQuery) {
      props.history.push(`search/movies/${searchQuery}`);
    }
  };

  const onInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchTrendingTv());
    dispatch(fetchTopRatedMov());
  }, [dispatch]);

  return (
    <div>
      <header className="App-header">
        <div className="home-title-wrapper">
          <h2 className="Explore">Trending</h2>
          <motion.div
            className="testDiv"
            initial={{ opacity: 0 }}
            animate={isToggled ? "active" : "inActive"}
            variants={variants}
          >
            <div className="searchbar-wrapper">
              <input
                className="search-input"
                type="text"
                placeholder="Search over 10,000 movies..."
                onChange={onInputChange}
                onKeyPress={onKeyEnter}
                value={searchQuery}
              />

              <button className="btn search-btn" onClick={onSubmit}>
                <FontAwesomeIcon className="search-icn" icon={faSearch} />
              </button>
            </div>
          </motion.div>

          <button
            className="btn search-toggle"
            onClick={() => setToggle(!isToggled)}
          >
            <FontAwesomeIcon className="search-icn" icon={faSearch} />
          </button>
        </div>
      </header>

      <motion.div variants={container} className="home-gallery-wrapper">
        {trendingMovies &&
          trendingMovies.movies &&
          trendingMovies.movies.results &&
          trendingMovies.movies.results.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              title={item.title}
              rating={item.vote_average}
              poster={item.poster_path}
              isMovie={true}
            />
          ))}
      </motion.div>
      <div className="home-tv-wrapper">
        <div className="tv-header">
          <h2>TV Shows</h2>
        </div>
        <motion.div variants={container} className="home-gallery-wrapper">
          {trendingTvShows &&
            trendingTvShows.shows &&
            trendingTvShows.shows.results &&
            trendingTvShows.shows.results.map((item) => (
              <Card
                id={item.id}
                key={item.id}
                title={item.name}
                rating={item.vote_average}
                poster={item.poster_path}
                isMovie={false}
              />
            ))}
        </motion.div>
      </div>
      <section className="home-movie-list-wrapper">
        <div className="list-header">
          <h2>Top Rated</h2>
        </div>
        {topRatedMovies &&
          topRatedMovies.movies &&
          topRatedMovies.movies.results &&
          topRatedMovies.movies.results.map((item) => (
            <ListCard
              id={item.id}
              key={item.id}
              title={item.title}
              rating={item.vote_average}
              poster={item.poster_path}
              isMovie={true}
            />
          ))}
      </section>
    </div>
  );
};

export default Home;
