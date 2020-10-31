import React from "react";
import { Link } from "gatsby";
import { useBookmarkListQuery } from "../types/generated";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  cardWrapper: {
    background: "#f3f3f3",
    padding: "40px",
    maxWidth: "600px",
    margin: "100px auto 0 auto ",
    borderRadius: "8px",
  },
  title: {
    textTransform: "capitalize",
    fontSize: "30px",
    fontWeight: 550,
  },
  date: {
    marginTop: "-3px",
  },
  description: {
    color: "#718096",
  },
}));

const BookmarkCard = () => {
  const classes = useStyle();
  const { loading, error, data } = useBookmarkListQuery();
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  console.log(data);
  return (
    <div>
      <div className={`Maincontainer`}>
        <div className={classes.cardWrapper}>
          <Box pb={2}>
            <Typography className={`textPrimary ${classes.title}`}>
              some rand
            </Typography>
            <Typography
              color="secondary"
              variant="subtitle2"
              className={classes.date}
            >
              Created At: {"10/10/10"}
            </Typography>
          </Box>
          <Typography className={classes.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            quisquam, quibusdam recusandae dicta nam deserunt quia consequuntur
            non velit facere dolores omnis sed aut commodi voluptatibus ea
            repellendus exercitationem tenetur.
          </Typography>
          <Box pt={2}>
            <a href="google.com" target="_blank">
              <Button variant="contained" color="secondary">
                Read More
              </Button>
            </a>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
