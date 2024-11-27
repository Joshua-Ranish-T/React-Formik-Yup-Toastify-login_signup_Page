import React, { useState } from "react";
import "./loginPage.css";
import { Heading, P, IconStyledList, StyledForm } from "./styledComponents";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import LoginIcon from "@mui/icons-material/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as yup from "yup";

const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

const validateSchema = yup.object({
  signupname: yup
    .string("Enter your username")
    .required("This field is required")
    .matches(
      usernameRegex,
      "Username can only contain letters, numbers, and underscores, and must be 3-20 characters long"
    ),
  signupemail: yup
    .string("Enter your Email")
    .required("This field is required")
    .email("Enter a valid Email"),
  signuppassword: yup
    .string("Enter your password")
    .min(8, "The password should contain atleast 8 characters")
    .matches(
      regex,
      "Password must include atleast one uppercase, lowercase, number, and special character"
    )
    .required("This field is required"),
});

const validateSchema2 = yup.object({
  signinemail: yup
    .string("Enter your Email")
    .required("This field is required")
    .email("Enter a valid Email"),
  signinpassword: yup
    .string("Enter your password")
    .required("This field is required"),
});

const LoginPage = () => {
  let [state, setState] = useState("Signup");

  const onsubmit = async (values, actions) => {
    try {
      toast.success("Success! Operation completed.");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(values);
      actions.resetForm();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  const formikUp = useFormik({
    initialValues: {
      signupname: "",
      signupemail: "",
      signuppassword: "",
    },
    validationSchema: validateSchema,
    onSubmit: onsubmit,
  });

  const formikIn = useFormik({
    initialValues: {
      signinemail: "",
      signinpassword: "",
    },
    validationSchema: validateSchema2,
    onSubmit: onsubmit,
  });

  return (
    <div className="container">
      <div className="both-container">
        <div
          className="signUp-left"
          style={{
            zIndex: state === "Signin" ? "50" : "10",
            opacity: state === "Signup" ? "0" : "1",
          }}
        >
          <Heading>Create Account</Heading>
          <P>Please sign in to continue</P>
          <IconStyledList />
          <P>or</P>
          <StyledForm
            style={{ width: "300px" }}
            onSubmit={formikUp.handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="signupname"
              value={formikUp.values.signupname}
              onChange={formikUp.handleChange}
              onBlur={formikUp.handleBlur}
              error={
                formikUp.touched.signupname &&
                Boolean(formikUp.errors.signupname)
              }
              helperText={
                formikUp.touched.signupname && formikUp.errors.signupname
              }
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="signupemail"
              value={formikUp.values.signupemail}
              onChange={formikUp.handleChange}
              onBlur={formikUp.handleBlur}
              error={
                formikUp.touched.signupemail &&
                Boolean(formikUp.errors.signupemail)
              }
              helperText={
                formikUp.touched.signupemail && formikUp.errors.signupemail
              }
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="signuppassword"
              type="password"
              value={formikUp.values.signuppassword}
              onChange={formikUp.handleChange}
              onBlur={formikUp.handleBlur}
              error={
                formikUp.touched.signuppassword &&
                Boolean(formikUp.errors.signuppassword)
              }
              helperText={
                formikUp.touched.signuppassword &&
                formikUp.errors.signuppassword
              }
            />
             <div style={{display: "flex",
                justifyContent: "center",
                alignItems: "center"}}>
            <Button
              variant="contained"
              endIcon={<ArrowCircleUpIcon />}
              style={{ width: "150px" }}
              type="submit"
            >
              Sign Up
            </Button>
            </div>
          </StyledForm>
        </div>
        <div
          className="signIn-right"
          style={{
            zIndex: state === "Signup" ? "50" : "10",
            opacity: state === "Signin" ? "0" : "1",
          }}
        >
          <Heading>Sign In</Heading>
          <IconStyledList />
          <P>or use your account</P>
          <StyledForm
            style={{ width: "300px" }}
            onSubmit={formikIn.handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="signinemail"
              type="text"
              value={formikIn.values.signinemail}
              onChange={formikIn.handleChange}
              onBlur={formikIn.handleBlur}
              error={
                formikIn.touched.signinemail &&
                Boolean(formikIn.errors.signinemail)
              }
              helperText={
                formikIn.touched.signinemail && formikIn.errors.signinemail
              }
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="signinpassword"
              type="password"
              value={formikIn.values.signinpassword}
              onChange={formikIn.handleChange}
              onBlur={formikIn.handleBlur}
              error={
                formikIn.touched.signinpassword &&
                Boolean(formikIn.errors.signinpassword)
              }
              helperText={
                formikIn.touched.signinpassword &&
                formikIn.errors.signinpassword
              }
            />

            <a href="" style={{ textDecoration: "none", color: "#1976d2" }}>
              Forgot your password ?
            </a>
            <div style={{display: "flex",
                justifyContent: "center",
                alignItems: "center"}}>
            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              style={{
                width: "150px",
              }}
              type="submit"
            >
              SIGN IN
            </Button>
            </div>
          </StyledForm>
        </div>
      </div>
      <div className="overlay-container" style={{ color: "white" }}>
        <div className="overlay">
          <div
            className="overlay-signUp"
            style={{
              background: "#1976d2",
              transform:
                state === "Signup" ? "translateX(0%)" : "translateX(100%)",
              opacity: state === "Signup" ? "1" : "0",
              zIndex: state === "Signup" ? "30" : "20",
            }}
          >
            <Heading>Hello !</Heading>
            <P>Enter your personal details and start journry with us</P>
            <Button
              variant="outlined"
              onClick={() => {
                setState("Signin");
              }}
              style={{ width: "150px", color: "white", borderColor: "white" }}
            >
              Sign Up
            </Button>
          </div>
          <div
            className="overlay-signIn"
            style={{
              background: "#1976d2",
              transform:
                state === "Signin" ? "translateX(100%)" : "translateX(0%)",
              opacity: state === "Signin" ? "1" : "0",
            }}
          >
            <Heading>Welcome Back !</Heading>
            <P>To keep connected with us please login with us</P>
            <Button
              variant="outlined"
              onClick={() => {
                setState("Signup");
              }}
              style={{ width: "150px", color: "white", borderColor: "white" }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
