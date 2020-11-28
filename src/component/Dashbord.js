import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CategoryIcon from "@material-ui/icons/Category";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles({
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  root: {
    minWidth: "250px",
    minHeight: "90px",
    border: "1px solid #eee",
    overflow: "hidden",
    boxShadow: "2px 8px 20px #ddd",
    margin: "10px",
    transition: "0.5s linear",
  },

  bullet: {
    margin: "0 2px",
    transform: "scale(0.8)",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bolder",
    fontFamily: "Sans",
    color: "white",
  },
  pos: {
    marginBottom: 12,
    color: "white",
  },
  Above: {
    display: "flex",
  },
});

const Dashbord = () => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <div>
        <h1 style={{ paddingLeft: "10px" }}>Dashbord</h1>
      </div>
      <div className={classes.main}>
        <Card
          className={classes.root}
          style={{ backgroundColor: "#00C3B0" }}
          variant="outlined"
        >
          <CardContent style={{ display: "inline-block" }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {"1"}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {"Total Users"}
            </Typography>
          </CardContent>

          <CardActions style={{ display: "inline-block" }}>
            <SupervisorAccountIcon
              color="disabled"
              style={{ fontSize: 70, marginLeft: "20px" }}
            />
          </CardActions>
        </Card>
        {/* //2 */}
        <Card
          className={classes.root}
          variant="outlined"
          style={{ backgroundColor: "#FF002B" }}
        >
          <CardContent style={{ display: "inline-block" }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {"176"}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {"Total Category"}
            </Typography>
          </CardContent>
          <CardActions style={{ display: "inline-block" }}>
            <CategoryIcon
              color="disabled"
              style={{ fontSize: 70, marginLeft: "20px" }}
            />
          </CardActions>
        </Card>
        {/* //3 */}
        <Card
          className={classes.root}
          variant="outlined"
          style={{ backgroundColor: "#FFC208" }}
        >
          <CardContent style={{ display: "inline-block" }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {"230"}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {"Total Store"}
            </Typography>
          </CardContent>
          <CardActions style={{ display: "inline-block" }}>
            <StoreMallDirectoryIcon
              color="disabled"
              style={{ fontSize: 70, marginLeft: "20px" }}
            />
          </CardActions>
        </Card>
        {/* //4 */}
        <Card
          className={classes.root}
          variant="outlined"
          style={{ backgroundColor: "#00DB54" }}
        >
          <CardContent style={{ display: "inline-block" }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {"192"}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {"Total Coupons"}
            </Typography>
          </CardContent>
          <CardActions style={{ display: "inline-block" }}>
            <MonetizationOnIcon
              color="disabled"
              style={{ fontSize: 70, marginLeft: "20px" }}
            />
          </CardActions>
        </Card>
        {/* //5 */}
        <Card
          className={classes.root}
          variant="outlined"
          style={{ backgroundColor: "#B430C7" }}
        >
          <CardContent style={{ display: "inline-block" }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {"617"}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {"Total Deals"}
            </Typography>
          </CardContent>
          <CardActions style={{ display: "inline-block" }}>
            <AirplanemodeActiveIcon
              color="disabled"
              style={{ fontSize: 70, marginLeft: "20px" }}
            />
          </CardActions>
        </Card>
        {/* //6 */}
        <Card
          className={classes.root}
          variant="outlined"
          style={{ backgroundColor: "#D10054" }}
        >
          <CardContent style={{ display: "inline-block" }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {"0"}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {"Total Discussion"}
            </Typography>
          </CardContent>
          <CardActions style={{ display: "inline-block" }}>
            <AttachMoneyIcon
              color="disabled"
              style={{ fontSize: 70, marginLeft: "20px" }}
            />
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Dashbord;
