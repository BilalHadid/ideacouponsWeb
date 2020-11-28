import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import "reactjs-popup/dist/index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Popup from "reactjs-popup";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "25px",
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
const CategDeal = () => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [value, setValue] = useState("");
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5001/deals")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  let { id } = useParams();
  return (
    <div>
      {post.map((post) => {
        return (
          <div>
            {post.category == id ? (
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} src={post.image} alt="" />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            {post.DealName}
                          </Typography>
                          <Typography variant="p" gutterBottom>
                            {post.Description}
                          </Typography>
                          <Typography variant="p" gutterBottom>
                            starting {post.DealName} : {post.price}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Popup
                          trigger={
                            <a target="_blank" href={post.dealURL}>
                              <button className="glow-on-hover  button">
                                {" "}
                                Get Deal{" "}
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
                              <div className="header"> {post.DealName} </div>
                              <div className="content">
                                <center>
                                  {" "}
                                  <img
                                    className={classes.img}
                                    src={post.image}
                                    alt=""
                                  />
                                </center>
                                <center>
                                  <a
                                    href={post.dealURL}
                                    style={{
                                      fontSize: "20px",
                                      color: "#ea4c89",
                                    }}
                                  >
                                    Visit Store
                                  </a>
                                </center>
                                <br />
                                <center>{post.Description}</center>
                              </div>
                              <div className="actions">
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
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default CategDeal;
