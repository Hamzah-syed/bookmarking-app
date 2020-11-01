import React from "react";
import { Link } from "gatsby";
import { useBookmarkListQuery } from "../types/generated";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import dayjs from "dayjs";

const useStyle = makeStyles((theme) => ({
  cardWrapper: {
    background: "#f3f3f3",
    padding: "40px",
    maxWidth: "600px",
    margin: "10px auto 0 auto ",
    borderRadius: "8px",
    position: "relative",
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
  deleteButton: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: "15px",
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
  const sortedByCreatedAt = data?.bookmarks?.slice().sort((a, b) => {
    return dayjs(b?.createdAt).isAfter(dayjs(a?.createdAt)) ? 1 : -1;
  });
  console.log(sortedByCreatedAt);

  return (
    <div>
      <div className={`Maincontainer`}>
        <Box pt={10}>
          {!!sortedByCreatedAt &&
            sortedByCreatedAt?.map((bookmark) => (
              <div className={classes.cardWrapper}>
                <Box pb={2}>
                  <Typography className={`textPrimary ${classes.title}`}>
                    {bookmark?.title}
                  </Typography>
                  <Typography
                    color="secondary"
                    variant="subtitle2"
                    className={classes.date}
                  >
                    Created At:{" "}
                    {dayjs(bookmark?.createdAt).format("DD/MM/YYYY")}
                  </Typography>
                </Box>
                <Typography className={classes.description}>
                  {bookmark?.description}
                </Typography>
                <Box pt={2}>
                  <a href={bookmark?.url} target="_blank">
                    <Button variant="contained" color="secondary">
                      Read More
                    </Button>
                  </a>
                </Box>
                <div className={classes.deleteButton}>
                  <button>delete</button>
                </div>
              </div>
            ))}
        </Box>
      </div>
    </div>
  );
};

export default BookmarkCard;
