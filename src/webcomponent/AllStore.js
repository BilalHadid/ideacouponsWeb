import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
const AllStore = () => {
  const [search, setSearch] = useState("");
  const [alphabel, setAlphabet] = useState("");
  //   const onSearchInputChange = (e) => {
  //     setSearch(e.target.value);
  //   };
  const onAlphabetClick = (e) => {
    setAlphabet(e.target.value);
  };
  const prepareAlphabets = () => {
    let result = [];
    for (let i = 65; i < 91; i++) {
      result.push(
        <button
          type="button"
          key={i}
          className="AlphaButton"
          onClick={onAlphabetClick}
          value={String.fromCharCode(i)}
        >
          {String.fromCharCode(i)}
        </button>
      );
    }
    return result;
  };
  const elementContainsSearchString = (setSearch, element) =>
    setSearch
      ? element.title.toLowerCase().includes(setSearch.toLowerCase())
      : false;
  const filterItems = (itemList) => {
    let result = [];
    let setSearch;
    let setAlphabet;
    if (itemList && (setSearch || alphabel)) {
      result = itemList.filter(
        (element) =>
          element.title.charAt(0).toLowerCase() === alphabel.toLowerCase() ||
          elementContainsSearchString(setSearch, element)
      );
    } else {
      result = itemList || [];
    }
    result = result.map((item) => (
      <li className="listStore">
        <Link to={`/stores/${item.id}`}>{item.title}</Link>
      </li>
    ));
    return result;
  };

  // const itemList = undefined;

  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/store")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {});
  });

  const filteredList = filterItems(post);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "15%",
          marginRight: "15%",
        }}
      >
        {prepareAlphabets()}
      </div>
      <h1>All Stores</h1>

      <div className="filterList">
        <ul>{filteredList}</ul>
      </div>
    </div>
  );
};

export default AllStore;
