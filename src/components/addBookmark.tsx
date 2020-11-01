import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOKMARK } from "../queries/addBookmark";
import { bookmarkList } from "../queries/bookmarkList";
import {
  makeStyles,
  Box,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../utlils/errorMsg";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "white",
    width: "100%",
    maxWidth: "350px",
    borderRadius: "5px",
    margin: "0 auto",
  },
  formTitle: {
    fontSize: "20px",
    fontWeight: 550,
  },
}));

const initialValues = {
  title: "",
  url: "",
  description: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),

  url: Yup.string()
    .matches(
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
      "Enter correct url!"
    )
    .required("Website url is required"),
  description: Yup.string().required("Description is Required"),
});

const AddBookmark = () => {
  const classes = useStyle();
  const [add_bookmark] = useMutation(ADD_BOOKMARK);

  const onSubmit = (values) => {
    add_bookmark({
      variables: {
        title: values.title,
        description: values.description,
        url: values.url,
      },
      refetchQueries: [{ query: bookmarkList }],
    });
  };
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.root}>
        <Box p={3}>
          <Box pb={1}>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <Box pb={2}>
                  <Typography
                    color="secondary"
                    className={` ${classes.formTitle}`}
                  >
                    Add Bookmark
                  </Typography>
                </Box>
                <Box style={{ paddingBottom: "12px" }}>
                  <div>
                    <Field
                      as={TextField}
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="title"
                      type="text"
                      label="Title"
                    />
                    {}
                    <ErrorMessage name="title" component={ErrorMsg} />
                  </div>
                </Box>
                <Box style={{ paddingBottom: "12px" }}>
                  <div>
                    <Field
                      as={TextField}
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="url"
                      type="text"
                      label="Url"
                    />
                    <ErrorMessage name="url" component={ErrorMsg} />
                  </div>
                </Box>
                <Box style={{ paddingBottom: "12px" }}>
                  <div>
                    <Field
                      as={TextField}
                      color="secondary"
                      multiline
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="description"
                      label="Description"
                      rows={3}
                    />
                    <ErrorMessage name="description" component={ErrorMsg} />
                  </div>
                </Box>
                <Button variant="contained" color="secondary" type="submit">
                  Submit
                </Button>
              </Form>
            </Formik>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default AddBookmark;
