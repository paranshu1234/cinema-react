import React from "react";

import { motion } from "framer-motion";

import "./User.css";

function User() {
  return (
    <motion.div
      className="user-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="login-wrapper">
        <h1>Login</h1>
        <input
          className="form-fields"
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <input
          className="form-fields"
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
        <button className="btn">login</button>
        <small>
          Don't have an account? <small>Signup</small>
        </small>
      </div>

      <div className="tmdb_wrapper">
        <img
          src="https://raw.githubusercontent.com/oliver-gomes/react-movie/master/public/images/tmdb_logo.png"
          alt="tmdb"
        />
      </div>
    </motion.div>
  );
}

export default User;
