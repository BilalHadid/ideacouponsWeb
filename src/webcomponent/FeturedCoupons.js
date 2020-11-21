import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import "reactjs-popup/dist/index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Popup from "reactjs-popup";
import "../App.css";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "#88888",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "2%",
    maxWidth: 800,
    border: "1px",
    borderColor: "#EFEFEF",
    borderStyle: "solid",
    boxShadow: "gray",
    marginTop: "25px",
  },
  image: {
    width: 128,
    height: 128,
    border: "1px",
    borderColor: "black",
    borderStyle: "solid",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const FeturedCoupons = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [copy, setCopy] = useState(false);
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
      {post.map((post) => {
        return (
          <div className="root">
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={post.image}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{
                          color: "#ff4441",
                          fontWeight: "bold",
                          fontFamily: "arial",
                        }}
                      >
                        {post.type}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        style={{ cursor: "pointer", fontWeight: "bold" }}
                      >
                        Expiry :{post.dealexpire}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    {/* <button className="glow-on-hover" type="button">
                           GetCode
                         </button> */}
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
                              <span
                                style={{ fontSize: "20px", color: "#ea4c89" }}
                              >
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
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default FeturedCoupons;
