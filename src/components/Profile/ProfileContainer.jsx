import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileData,
  getProfileStatus,
  updateProfileStatus,
  savePhoto,
  saveProfile,
} from "../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.param.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.getProfileData(userId);
    this.props.getProfileStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.param.userId != prevProps.param.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.param.userId}
        status={this.props.status}
        profile={this.props.profile}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

const TakeParams = (props) => {
  return <ProfileContainer {...props} param={useParams()} />;
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePageD.profile,
    status: state.profilePageD.status,
    authUserId: state.auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfileData,
    getProfileStatus,
    updateProfileStatus,
    savePhoto,
    saveProfile,
  }),
  withAuthRedirect
)(TakeParams);
