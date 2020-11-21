import React, { useState, useEffect } from "react";
import avator from "./logo.png";
import "../App.css";
import HomeIcon from "@material-ui/icons/Home";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import TopStore from "./TopStore";
import axios from "axios";
import ImageMain from "./ImageMain";
import FeturedCoupons from "./FeturedCoupons";
import Footer from "./footer";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/slider")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
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
            <a href="#" id="logo" target="_blank">
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
        <div>
          {/* <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/" /> */}
          <div id="slider">
            <figure>
              {post.map((post) => {
                return (
                  <img
                    style={{ height: "70vh" }}
                    src={post.image}
                    alt={post.id}
                  />
                );
              })}
              {/* <img
                src="https://i.pinimg.com/564x/51/42/2c/51422c22237313aa284e169eca38d213.jpg"
                alt="hello"
              />
              <img
                src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
                alt="hello"
              />
              <img
                src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
                alt="hello"
              />
              <img
                src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
                alt="hello"
              />
              <img
                src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
                alt="hello"
              /> */}
            </figure>
          </div>
        </div>
      </div>
      <div>
        <h1>Top Stores</h1>
        <TopStore />
        <div>
          <FeturedCoupons />
          <ImageMain />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
