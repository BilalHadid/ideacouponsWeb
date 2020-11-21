import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchApi = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/CouponDeal")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div></div>;
};

export default FetchApi;
