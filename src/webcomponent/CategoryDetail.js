import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./footer";
import FetureCoupons from "./FeturedCoupons";

export const CategoryDetail = ({ pass }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  let { id } = useParams();
  let Title = post.map((post) => {
    return <span>{post.id == id ? `${post.title}` : ``}</span>;
  });
  let Descript = post.map((post) => {
    return <span>{post.id == id ? `${post.body}` : ``}</span>;
  });
  return (
    <div>
      <Header />
      <h1>{Title}</h1>
      <div>
        <FetureCoupons />
      </div>
      <div
        style={{
          borderStyle: "solid",
          borderColor: "darkgray",
          display: "block",
          marginLeft: "10%",
          marginRight: "10%",
          padding: "1%",
        }}
      >
        <h2>More About {Title}</h2>
        <p style={{ color: "black" }}>{Descript}</p>
      </div>
      <Footer />
    </div>
  );
};
