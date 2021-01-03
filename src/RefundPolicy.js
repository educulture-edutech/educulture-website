import React from "react";
import { Grid } from "@material-ui/core";

export default function RefundPolicy() {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <h1 style={{ textAlign: "center" }}>
          <u>Refund Policy</u>
        </h1>
      </Grid>
      <br />
      <br />
      <Grid
        style={{ margin: "15px" }}
        container
        justify="center"
        alignItems="center"
      >
        <p>
          Since we deal in online video courses and it's a digital service, we
          don't offer a refund.
        </p>
        &nbsp;
        <p>
          We request you to watch our sample free videos, available in almost
          every course.
        </p>
        &nbsp;
        <p>
          You can also watch our youtube channel videos to get to know about the
          quality of our videos. In simple terms, WE DON'T EXCEPT REFUND AT
          EDUCULTURE.
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
