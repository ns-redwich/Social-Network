import React from "react";
import FormContainer from "./FormProfile/FormContainer";
import PostListContainer from "./PostList/PostListContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.cover}></div>
      <div className={styles.container}>
        <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} updateProfileStatus={props.updateProfileStatus} status={props.status} profile={props.profile} />
        <h2 className={styles.h2}>My posts</h2>
        <FormContainer store={props.store} />
        <PostListContainer store={props.store} />
      </div>
    </main>
  );
};

export default Profile;
