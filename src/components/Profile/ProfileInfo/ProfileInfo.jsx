import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <img src="/preloader.svg" alt="" />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files && e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoFrame}>
        <div className={styles.leftInfo}>
          <div className={styles.avatarFrame}>
            <img
              src={props.profile.photos.large || "/avatar.png"}
              className={styles.avatar}
            ></img>
            {props.isOwner && (
              <input type="file" onChange={onMainPhotoSelected} />
            )}
          </div>
          {editMode ? (
            <ProfileDataForm
              saveProfile={props.saveProfile}
              goToData={() => setEditMode(false)}
            />
          ) : (
            <ProfileData
              profile={props.profile}
              isOwner={props.isOwner}
              goToEditMode={() => setEditMode(true)}
            />
          )}
        </div>
        <div className={styles.rightInfo}>
          <div>
            <p className={styles.aboutMe}>Friends:</p>
            <div className={styles.friendsFrame}>
              <div className={styles.friend}></div>
              <div className={styles.friend}></div>
              <div className={styles.friend}></div>
              <div className={styles.friend}></div>
            </div>
          </div>
          <button className={styles.btnSendM}>Send message</button>
        </div>
      </div>
      <ProfileStatus
        updateProfileStatus={props.updateProfileStatus}
        status={props.status}
      />
    </div>
  );
};

const ProfileData = ({ profile, goToEditMode, isOwner }) => {
  return (
    <div className={styles.info}>
      <h1 className={styles.name}>{profile.fullName}</h1>
      <p className={styles.aboutMe}>About me: {profile.aboutMe || "---"}</p>
      <p className={styles.aboutMe}>
        Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
      </p>
      <p className={styles.aboutMe}>
        Looking for a job description: {profile.lookingForAJobDescription}
      </p>
      {isOwner ? <button className={styles.editDataBtn} onClick={goToEditMode}>Edit</button> : null}
    </div>
  );
};

export default ProfileInfo;
