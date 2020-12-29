import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Box,
  Link,
  withStyles,
  Hidden,
  createMuiTheme,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";

export default function RefundPolicy() {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <h1>
          <u>Refund Policy</u>
        </h1>
      </Grid>
      <br />
      <br />
      <Grid container justify="center" alignItems="center">
        <p>
          All the paid (non-free) subjects offered by Educulture are
          non-refundable.
        </p>
        &nbsp;
        <p>
          For additional queries, read our payment policy under Privacy
          Statement.
        </p>
      </Grid>

      <footer
        style={{ position: "fixed", bottom: "0px", left: "0px", width: "100%" }}
      >
        <hr />
        <Grid container justify="center" alignItems="center">
          <p>Educulture &#9400; All rights reserved.</p>
        </Grid>
      </footer>
    </div>
  );
}
