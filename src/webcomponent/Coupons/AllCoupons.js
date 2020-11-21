import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "../../App.css";
import "reactjs-popup/dist/index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Popup from "reactjs-popup";

const useStyles = makeStyles({
  root: {
    maxWidth: 305,
  },
  media: {
    height: "150px",
    width: "150px",
    marginLeft: "80px",
  },
});

const AllCoupons = () => {
  const [value, setValue] = useState("");
  const [copy, setCopy] = useState(false);
  const classes = useStyles();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/CouponDeal")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {});
  });

  return (
    <div>
      <div>
        <h1 class="second">
          <span>All Coupons</span>
        </h1>
      </div>
      <div className="iconBox">
        {post.map((post) => {
          return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <img
                    style={{ height: "80px", width: "100px" }}
                    src={post.image}
                    alt={post.id}
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.type}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Popup
                  trigger={
                    <a target="_blank" href={post.dealURL}>
                      <button className="glow-on-hover  button">
                        {" "}
                        Get Code{" "}
                      </button>
                    </a>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header"> {post.type} </div>
                      <div className="content">
                        <center>
                          <img
                            style={{ height: "100px", width: "150px" }}
                            src={post.image}
                            alt="hell"
                          />
                        </center>
                        <center>
                          <span style={{ fontSize: "20px", color: "#ea4c89" }}>
                            Visit Store
                          </span>
                        </center>
                        <br />
                        <center>{post.type}</center>
                        <center>Copy and Paste Code At Checkout</center>
                      </div>
                      <div className="actions">
                        <input
                          className="input"
                          value={post.couponscode}
                          onChange={() => setCopy(value)}
                        />

                        <CopyToClipboard
                          text={value}
                          onCopy={() => setValue(value)}
                        >
                          <button
                            className="button"
                            onClick={() => setCopy(true)}
                          >
                            Copy Code
                          </button>
                        </CopyToClipboard>

                        {copy ? (
                          <span style={{ color: "red" }}>Copied.</span>
                        ) : null}
                        {/* <button
                                   className="button"
                                   onClick={() => {
                                     console.log("modal closed ");
                                     close();
                                   }}
                                 >
                                   close modal
                                 </button> */}
                      </div>
                    </div>
                  )}
                </Popup>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AllCoupons;
