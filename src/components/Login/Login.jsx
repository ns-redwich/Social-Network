import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import { Navigate } from "react-router-dom";
import s from "./Login.module.css";

const Login = (props) => (
  <div>
    {props.isAuth ? <Navigate to="/profile" /> : null}
    <h1 className={s.title}>Sign In</h1>
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
        props.login(
          values.email,
          values.password,
          values.rememberMe,
          values.captcha
        );
      }}
      validationSchema={loginFormSchema}
    >
      {() => (
        <Form>
          <div>
            <Field
              className={s.input}
              type={"text"}
              name={"email"}
              placeholder={"e-mail"}
            />
          </div>
          <ErrorMessage name="email" component="div" />

          <div>
            <Field
              className={s.input}
              type={"password"}
              name={"password"}
              placeholder={"password"}
            />
          </div>
          <ErrorMessage name="password" component="div" />

          {props.captchaUrl && <img src={props.captchaUrl} />}
          {props.captchaUrl && (
            <div>
              <Field
                type={"captcha"}
                name={"captcha"}
                placeholder={"captcha"}
              />
            </div>
          )}

          <div>
            <Field type={"checkbox"} name={"rememberMe"} />
            <label htmlFor={"rememberMe"}> remember me </label>
          </div>

          <button className={s.btn} type={"submit"}>Sign In</button>
          <button className={s.btn}>
            <a
              href="https://social-network.samuraijs.com/signUp"
              target="_blank"
              rel="noreferrer"
            >
              Sign Up
            </a>
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
