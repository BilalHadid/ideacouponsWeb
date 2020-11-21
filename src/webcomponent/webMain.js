import React from "react";
import HeaderMain from "./HeaderMain";
import FeaturedCoupon from "./FeturedCoupons";
import ImageMain from "./ImageMain";
import Footer from "./footer";
import FetchApi from "./FetchApi";
import Categories from "./Categories";
import { CategoryDetail } from "./CategoryDetail";

// import { Routes, Route } from "react-router-dom";

const WebMain = () => {
  return (
    <div>
      <Categories />
    </div>
  );
};

export default WebMain;
