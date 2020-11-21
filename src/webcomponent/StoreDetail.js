import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import FeturedCoupons from "./FeturedCoupons";

const StoreDetail = ({ pass }) => {
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
  let { id } = useParams();
  let poster = post.map((post) => {
    return <span>{post.id == id ? `${post.title}` : ``}</span>;
  });
  let imager = post.map((post) => {
    return <span>{post.id == id ? `${post.Description}` : ``}</span>;
  });
  return (
    <div>
      <Header />

      <div>
        <h1>{poster}</h1>
        <div>
          <FeturedCoupons />
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
          <h2 style={{ color: "black" }}>More About {poster}</h2>
          <br />
          <p style={{ color: "black" }}>{imager}</p>
        </div>
      </div>

      {/* <h1>{id}</h1> */}
      <Footer />
    </div>
  );
};

export default StoreDetail;
