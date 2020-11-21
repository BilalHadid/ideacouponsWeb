import React, { useState } from "react";
import avator from "./logo.png";
import "../App.css";
import HomeIcon from "@material-ui/icons/Home";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="topHead">
        <div className="icons">
          <HomeIcon
            className="icono"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "50px",
              padding: "5px",
              fontSize: "20px",
              cursor: "pointer",

              margin: "7px",
            }}
          />
          <YouTubeIcon
            className="icono"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "50px",
              padding: "5px",
              fontSize: "20px",

              cursor: "pointer",

              margin: "7px",
            }}
          />
          <InstagramIcon
            className="icono"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "50px",
              padding: "5px",
              fontSize: "20px",

              cursor: "pointer",

              margin: "7px",
            }}
          />
          <PinterestIcon
            className="icono"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "50px",
              padding: "5px",
              fontSize: "20px",

              margin: "7px",
              cursor: "pointer",
            }}
          />
          <TwitterIcon
            className="icono"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "50px",
              padding: "5px",
              fontSize: "20px",
              margin: "7px",
              cursor: "pointer",
            }}
          />
        </div>
        <div class="search-container">
          <form>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div>
        <header>
          <section>
            <a href="/" id="logo" target="_blank">
              <img src={avator} alt="alt" />
            </a>

            <label for="toggle-1" className="toggle-menu">
              <ul>
                <li></li> <li></li> <li></li>
              </ul>
            </label>
            <input type="checkbox" id="toggle-1" />

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/coupons">Coupons</Link>
                </li>

                <li>
                  <Link to="/stores">Stores</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </nav>
          </section>
        </header>
      </div>
    </div>
  );
};

export default Header;
