import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  image: {
    width: 228,
    height: 158,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const BlogAll = () => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/blog")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {});
  });
  return (
    <div>
      {post.map((post) => {
        return (
          <div className={classes.root}>
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
                      <Typography
                        gutterBottom
                        variant="h4"
                        style={{ color: "#ff444a" }}
                      >
                        {post.title}
                      </Typography>
                      <Typography variant="h5" gutterBottom>
                        {post.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {post.timestamp}
                      </Typography>
                    </Grid>
                    <Grid item></Grid>
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

export default BlogAll;
