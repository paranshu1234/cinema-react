import React  from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFilm  , faHeart , faUser  } from '@fortawesome/free-solid-svg-icons'



import "./Navigation.css"

function Navigation() {


    return (
        <div className="nav-wrapper">
        <nav>
        <NavLink activeClassName="nav__link__active" className="nav__link" exact strict to="/">
        <FontAwesomeIcon className="film-icn" icon={faFilm} />
        </NavLink>
        <NavLink activeClassName="nav__link__active" className="nav__link" exact strict to="/favourites">
        <FontAwesomeIcon className="heart-icn" icon={faHeart} />
        </NavLink>
        <NavLink activeClassName="nav__link__active" className="nav__link" exact strict to="/settings">
        <FontAwesomeIcon className="user-icn" icon={faUser} />
        </NavLink>
      </nav>
        </div>
    )
}

export default Navigation
