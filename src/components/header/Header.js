import React from "react";
import Logo from "../../assets/images/Logonetflix.png";
import "../header/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <div className="container">
        <div className="netflix-logo">
        <Link to="/">
        <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav className="nav-menu">
        <Link to="/">TV Shows</Link> 
        <Link to="movies">Movies</Link>
        <Link to="recently-added">Recently Added</Link>
        <Link to="my-list">My List</Link>
      </nav>
        </div>
    </header>
  );
};

export default Header;
