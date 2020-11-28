import React from "react";
import Main from "./Main";
import WebMain from "./webcomponent/webMain";
import { CategoryDetail } from "./webcomponent/CategoryDetail";
import { Routes, Route } from "react-router-dom";
import NotFound from "./webcomponent/NotFound";
import HeaderMain from "./webcomponent/HeaderMain";
import Coupons from "./webcomponent/Coupons/Coupons";
import Stores from "./webcomponent/Stores";
import MainBlog from "./webcomponent/Blog/MainBlog";
import StoreDetail from "./webcomponent/StoreDetail";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" component={<WebMain />} />
        <Route path="/:id" component={<CategoryDetail />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<HeaderMain />} />
        <Route path="/categories" element={<WebMain />} />
        <Route path="/categories/:id" element={<CategoryDetail />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/stores/:id" element={<StoreDetail />} />
        <Route path="/blogs" element={<MainBlog />} />
        <Route path="/admin" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
