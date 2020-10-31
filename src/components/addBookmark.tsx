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

const useStyle = makeStyles((theme) => ({
  root: {
    background: "white",
    padding: "10px 20px",
    width: "100%",
    maxWidth: "350px",
    borderRadius: "5px",
  },
}));

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Incorrect Email").required("Email is required"),

  password: Yup.string().required("Password is required"),
});
const AddBookmark = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
        <Typography>Home</Typography>
        <Box pb={1}>
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            fullWidth
          />
        </Box>
        <Box pb={1}>
          <TextField variant="outlined" size="small" fullWidth />
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-white text-lg font-medium title-font mb-5">
                Login
              </h2>
              <div className="mb-4">
                <Field
                  as={TextField}
                  color="secondary"
                  className="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base w-full px-4 py-2 "
                  name="email"
                  placeholder="Email"
                  type="text"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="mb-4">
                <Field
                  //   as={<TextField />}
                  className="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 w-full text-base px-4 py-2 "
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <ErrorMessage name="password" component={"ErrorMsg"} />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </Box>
      </div>
    </div>
  );
};

export default AddBookmark;
