import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const TopStore = () => {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/store")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Slider {...settings} className="categSlide">
      {post.map((post) => {
        return (
          <div className="categ">
            <Link to={`/stores/${post.id}`}>
              <img
                style={{ heigth: "200px", width: "200px" }}
                src={post.image}
                alt={post.title}
              />
            </Link>
          </div>
        );
      })}
      {/* <div className="categ"> */}
      {/* <img
          src="https://image.winudf.com/v2/image/Y29tLndlYjJkcm9pZC53M3NjaG9vbF9pY29uXzE1MTQwNDMwNjFfMDE4/icon.png?w=170&fakeurl=1"
          alt="Name"
        /> */}
      {/* </div> */}
      {/* <div className="categ">
        <img
          src="https://image.winudf.com/v2/image/Y29tLndlYjJkcm9pZC53M3NjaG9vbF9pY29uXzE1MTQwNDMwNjFfMDE4/icon.png?w=170&fakeurl=1"
          alt="Name"
        />
      </div>
      <div className="categ">
        <img
          src="https://image.winudf.com/v2/image/Y29tLndlYjJkcm9pZC53M3NjaG9vbF9pY29uXzE1MTQwNDMwNjFfMDE4/icon.png?w=170&fakeurl=1"
          alt="Name"
        />
      </div>
      <div className="categ">
        <img
          src="https://image.winudf.com/v2/image/Y29tLndlYjJkcm9pZC53M3NjaG9vbF9pY29uXzE1MTQwNDMwNjFfMDE4/icon.png?w=170&fakeurl=1"
          alt="Name"
        />
      </div>
      <div className="categ">
        <img
          src="https://image.winudf.com/v2/image/Y29tLndlYjJkcm9pZC53M3NjaG9vbF9pY29uXzE1MTQwNDMwNjFfMDE4/icon.png?w=170&fakeurl=1"
          alt="Name"
        />
      </div>
      <div className="categ">
        <img
          src="https://image.winudf.com/v2/image/Y29tLndlYjJkcm9pZC53M3NjaG9vbF9pY29uXzE1MTQwNDMwNjFfMDE4/icon.png?w=170&fakeurl=1"
          alt="Name"
        />
      </div> */}
    </Slider>
  );
};

export default TopStore;
