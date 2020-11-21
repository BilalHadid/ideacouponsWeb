import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
const MainCategories = () => {
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
  return (
    <div>
      <div>
        <h1 class="second">
          <span>Main Categories</span>
        </h1>
      </div>
      <div className="iconBox" style={{ marginBottom: "25px" }}>
        {post.map((post) => {
          return (
            <div>
              <Card className="catCard">
                {/* <i class="fa fa-address-book" aria-hidden="true"></i> */}
                <img src={post.image} alt="bilal" />
              </Card>

              <Link
                style={{
                  color: "#ff444a",
                  fontFamily: "serif",
                  marginLeft: "25px",
                  marginTop: "25px",
                }}
                to={`/categories/${post.id}`}
              >
                {post.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCategories;
