import React from "react";
import AddBookmark from "./addBookmark";
import {
  makeStyles,
  Grid,
  Hidden,
  Box,
  Typography,
  Button,
  capitalize,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
  },
  title: {
    color: "white",
    fontSize: "30px",
    fontWeight: 550,
  },
  desc: {
    color: "#f7fafc",
    fontSize: "20px",
  },
}));

const BoomarkLandingSection = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={`Maincontainer`}>
        <Box py={10}>
          <Grid container spacing={2}>
            <Hidden xsDown>
              <Grid
                item
                container
                justify="flex-end"
                alignContent="center"
                sm={6}
              >
                <div>
                  <Typography className={classes.title}>
                    Bookmarking Application
                  </Typography>
                  <Typography className={classes.desc}>
                    This App will let you save your bookmarks here for free
                  </Typography>
                </div>
              </Grid>
            </Hidden>
            <Grid item sm={6} xs={12} container justify="center">
              <AddBookmark />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default BoomarkLandingSection;
