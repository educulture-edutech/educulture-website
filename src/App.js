import React from "react";
import "./App.css";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Link,
  Hidden,
  createMuiTheme,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  SwipeableDrawer,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ReactPlayer from "react-player/lazy";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

import Carousel from "react-elastic-carousel";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  root: {
    // background: "#ebebeb",
    background: "url(/assets/icons/back-1.png) no-repeat center",
    backgroundSize: "cover",
    WebkitBackgroundSize: "cover",
    margin: 0,
    padding: 0,
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "300px",
      paddingRight: "300px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    // paddingLeft: "300px",
    // paddingRight: "300px",
    flexGrow: 1,
  },

  logoDiv: {
    height: "50px",
    width: "50px",
  },

  appBarStyles: {
    boxShadow: "none",
    zIndex: 0,
    marginTop: "15px",
  },

  grow: {
    flexGrow: 1,
  },

  button: {
    background: "a9cf46",
    boxShadow: "none",
    borderRadius: "0px",
  },

  mainCard: {
    minWidth: 275,
    borderRadius: "0px",
    boxShadow: "none",
    background: "#25282c",
    color: "white",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  contactUsButton: {
    "&:hover": {
      background: "#a9cf46",
    },
  },

  menuIconStyles: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },

  bottomIconGrid: {
    justifyContent: "flex-start",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },

  otherIconsGrid: {
    justifyContent: "flex-end",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      marginTop: "15px",
    },
  },

  copyrightLineStyles: {
    textAlign: "left",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },

  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export default function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === "top" || anchor === "bottom",
      // })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Button
              variant="outlined"
              style={{
                color: "#c43175",
                borderColor: "#c43175",
                borderRadius: "5px",
                textTransform: "none",
                marginRight: "20px",
                height: "50px",
                width: "150px",
              }}
              onClick={() =>
                Swal.fire({
                  title: "Contact Us",
                  html: `<p>For any queries, below are contact details: <br/> Mobile: +91-9021747391 <br/> Email: contact.educulture@gmail.com</p>`,
                  confirmButtonText: "Close",
                })
              }
            >
              Contact Us
            </Button>
          </ListItemIcon>
          {/* <ListItemText primary={text} /> */}
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <div>
              <img
                style={{
                  height: "75px",
                  width: "176px",
                  padding: 0,
                  marginLeft: "-12px",
                }}
                src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
                alt="main-logo"
              />
            </div>
          </ListItemIcon>
          {/* <ListItemText primary={text} /> */}
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appBarStyles}
        style={{ background: "inherit" }}
        position="static"
      >
        <Toolbar
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            style={{ margin: 0, padding: 0, marginLeft: "-10px" }}
            aria-label="menu"
            onClick={() => (window.location.href = "/")}
          >
            <img
              style={{ height: "50px", width: "50px" }}
              src="https://raw.githubusercontent.com/educulture-edutech/icons/main/final/main-logo/main-logo-250x250.png"
              alt="main-logo"
            />
          </IconButton>

          <h1 style={{ fontSize: "40px", color: "#c43175", marginLeft: "5px" }}>
            Educulture
          </h1>

          <div className={classes.grow}></div>
          <Hidden mdDown={true}>
            <Button
              variant="outlined"
              className={classes.contactUsButton}
              style={{
                color: "#c43175",
                borderColor: "#c43175",
                borderRadius: "5px",
                padding: "10px",
                textTransform: "none",
                marginRight: "20px",
                height: "50px",
                width: "150px",
              }}
              onClick={() =>
                Swal.fire({
                  title: "Contact Us",
                  html: `<p>For any queries, below are contact details: <br/> Mobile: +91-9021747391 <br/> Email: contact.educulture@gmail.com</p>`,
                  confirmButtonText: "Close",
                })
              }
            >
              Contact Us
            </Button>

            <div style={{ padding: 0, marginRight: "-15px", marginTop: "2px" }}>
              <img
                style={{ height: "80px", width: "220px", padding: 0 }}
                src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
                alt="main-logo"
              />
            </div>
          </Hidden>

          <div className={classes.menuIconStyles}>
            <Box>
              <IconButton
                onClick={toggleDrawer("right", true)}
                style={{ padding: 0 }}
                color="primary"
              >
                <MenuIcon />
              </IconButton>

              <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
              >
                {list("right")}
              </SwipeableDrawer>
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      {/* intro */}
      <Grid
        style={{ marginTop: "30px" }}
        container
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          justify="center"
          alignitems="center"
          style={{ paddingTop: "50px" }}
        >
          <h1 style={{ fontSize: "35px", textAlign: "center" }}>
            Marathi MPSC CSAT 2021 course is available now 🎉
          </h1>
        </Grid>

        {/* video player */}
        <div
          item
          style={{
            width: "1000px",
            height: "500px",
            marginTop: "60px",
            paddingBottom: "60px",
            textAlign: "center",
          }}
        >
          <ReactPlayer
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=yikdGjiIQsY"
          />
        </div>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <p style={{ backgroundColor: "b8b8b8" }}>
          &#9679; &nbsp; &#9679; &nbsp; &#9679;
        </p>
      </Grid>

      {/* student testimonials */}
      <Grid
        container
        style={{ marginTop: "30px" }}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <div>
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>
            Student Testimonials
          </h1>
        </div>

        <p style={{ fontSize: "20px", marginTop: "15px", textAlign: "center" }}>
          Our flagship MPSC CSAT course has received great reviews. Here are
          some of them.
        </p>
      </Grid>

      <Grid container style={{ marginTop: "30px" }}>
        <Carousel
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 3 },
          ]}
          showArrows={false}
          pagination={false}
          // itemsToShow={3}
        >
          <div
            style={{
              marginLeft: "0px",
              marginRight: "15px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <Card className={classes.mainCard} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <Avatar alt="Remy Sharp" src="/assets/icons/quotes.png" />
                </Typography>
                <div>
                  <p style={{ fontSize: "20px", lineHeight: "25px" }}>
                    - I like teaching style in MPSC CSAT course. It directly
                    connects with my thinking process and very understandable. I
                    personally like the Probability, Inequality, Ratio, and
                    Proportion. My question solving time is drastically reduced.
                    Thanks dada for this valuable knowledge.
                  </p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <hr />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ fontSize: "18px", lineHeight: "25px" }}>
                    Tushar Thete
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <Card className={classes.mainCard} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <Avatar alt="Remy Sharp" src="/assets/icons/quotes.png" />
                </Typography>
                <div>
                  <p style={{ fontSize: "20px", lineHeight: "25px" }}>
                    - I Loved Maths and I knew it's relative. In my scholarship
                    exams, I always tried to relate these numbers but I
                    couldn't. Because of Abhishek sir, it is easy to relate
                    numbers in any example. You have that spark which shows
                    beauty of Maths. All the best and thank you. Beauty of Maths
                    is irresistable. Thanking you..
                  </p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <hr />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ fontSize: "18px", lineHeight: "25px" }}>
                    Vasudha
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div
            style={{
              marginLeft: "15px",
              marginRight: "0px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <Card className={classes.mainCard} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <Avatar alt="Remy Sharp" src="/assets/icons/quotes.png" />
                </Typography>
                <div>
                  <p style={{ fontSize: "20px", lineHeight: "25px" }}>
                    - It's best course I've ever seen before for maths and
                    reasoning. It's focused on basic concepts more and in maths
                    it's quite important that u should know concept very well so
                    that u can apply it wherever n whatever type of sum u have
                    to solve. Looking forward to have more courses like this.
                  </p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <hr />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ fontSize: "18px", lineHeight: "25px" }}>
                    Manasi Bhagat
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div
            style={{
              marginLeft: "15px",
              marginRight: "0px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <Card className={classes.mainCard} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <Avatar alt="Remy Sharp" src="/assets/icons/quotes.png" />
                </Typography>
                <div>
                  <p style={{ fontSize: "20px", lineHeight: "25px" }}>
                    - Your teaching showed me real easy picture of CSAT which
                    generally seems a lot difficult. The main problem CSAT paper
                    is memorising all the formulae. This exactly solved that big
                    problem. Surely it boosted my confidence. Thank you so much
                    Abhishek sir and best of luck for exam.
                  </p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <hr />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ fontSize: "18px", lineHeight: "25px" }}>
                    Rahul Jadhav
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Carousel>
      </Grid>

      <Grid direction="row" style={{ marginTop: "15px" }} container>
        <Grid xs={12} md={6} container className={classes.bottomIconGrid}>
          <IconButton
            // edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            style={{ padding: "0px", marginLeft: "-8px" }}
            onClick={() => (window.location.href = "/")}
          >
            <img
              style={{ height: "40px", width: "40px", padding: 0 }}
              src="https://raw.githubusercontent.com/educulture-edutech/icons/main/final/main-logo/main-logo-250x250.png"
              alt="main-logo"
            />
          </IconButton>
        </Grid>
        <Grid xs={12} md={6} container className={classes.otherIconsGrid}>
          <div>
            <IconButton
              // edge="start"
              // className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              style={{ padding: "0px", marginRight: "15px" }}
            >
              <InstagramIcon
                style={{
                  height: "40px",
                  width: "40px",
                  color: "#b8b8b8",
                  padding: 0,
                }}
              />
              {/* <img
                style={{ height: "40px", width: "40px" }}
                src="https://raw.githubusercontent.com/educulture-edutech/icons/main/final/main-logo/main-logo-250x250.png"
                alt="main-logo"
              /> */}
            </IconButton>
            <IconButton
              // edge="start"
              // className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              style={{ padding: "0px", marginRight: "15px" }}
            >
              <FacebookIcon
                style={{
                  height: "40px",
                  width: "40px",
                  padding: 0,
                  color: "#b8b8b8",
                }}
              />
              {/* <img
                style={{ height: "40px", width: "40px" }}
                src="https://raw.githubusercontent.com/educulture-edutech/icons/main/final/main-logo/main-logo-250x250.png"
                alt="main-logo"
              /> */}
            </IconButton>
            <IconButton
              // edge="start"
              // className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              style={{ padding: "0px", marginRight: "15px" }}
              href="https://www.youtube.com/channel/UCN0F-8V9QAliUrKI2gOOkZA"
            >
              <YouTubeIcon
                style={{
                  height: "40px",
                  width: "40px",
                  color: "#b8b8b8",
                  padding: 0,
                }}
              />
              {/* <img
                style={{ height: "40px", width: "40px" }}
                src="https://raw.githubusercontent.com/educulture-edutech/icons/main/final/main-logo/main-logo-250x250.png"
                alt="main-logo"
              /> */}
            </IconButton>
          </div>
        </Grid>
      </Grid>

      <Grid direction="row" style={{ marginTop: "15px" }} container>
        <Grid xs={12} md={8} container className={classes.bottomIconGrid}>
          <p className={classes.copyrightLineStyles}>
            {" "}
            copyright &#9400; Educulture. All rights reserved.
          </p>
        </Grid>
        <Grid xs={12} md={4} container className={classes.otherIconsGrid}>
          <div>
            <Link style={{ paddingRight: "10px" }} href="/privacy">
              Privacy
            </Link>
            <Link style={{ paddingRight: "10px" }} href="/disclaimer">
              Disclaimer
            </Link>
            <Link style={{ paddingRight: "10px" }} href="/terms">
              Terms of Services
            </Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </Grid>
      </Grid>

      {/* <Grid
        container
        direction="row"
        style={{ background: "#c43175", padding: "15px" }}
      >
        <h2>want to get in touch?</h2>
      </Grid> */}
    </div>
  );
}
