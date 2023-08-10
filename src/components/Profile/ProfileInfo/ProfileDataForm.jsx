import React from "react";
import { Formik, Field, Form } from "formik";
import styles from "./ProfileInfo.module.css";

const ProfileDataForm = (props) => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        aboutMe: "",
        lookingForAJobDescription: "",
      }}
      onSubmit={(values) => {
        props.saveProfile(values);
        props.goToData();
        console.log(values);
      }}
    >
      <Form className={styles.infoForm}>
        <label htmlFor="fullName">Full name</label>
        <Field id="fullName" name="fullName" placeholder="Jane" />
        <label htmlFor="aboutMe">About me</label>
        <Field id="aboutMe" name="aboutMe" placeholder="Jane" />
        <label htmlFor="lookingForAJobDescription">Looking for a job description</label>
        <Field id="lookingForAJobDescription" name="lookingForAJobDescription" placeholder="Jane" />

        <button>Submit</button>
      </Form>
    </Formik>
  );
};

export default ProfileDataForm;
