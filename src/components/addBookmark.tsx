import React from "react";
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
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),

  url: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Website url is required"),
  description: Yup.string().required("Description is Required"),
});
const AddBookmark = () => {
  const classes = useStyle();
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
