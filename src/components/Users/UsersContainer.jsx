import React from "react";
import { connect } from "react-redux";
import Users from "./Users";

import {
  follow,
  unfollow,
  acceptFollow,
  acceptUnfollow,
  receiveUsers,
  toggleFollowingInProgress,
} from "../../redux/reducers/usersReducer";
import { getUsers } from "../../redux/reducers/usersSelectors";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.receiveUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.receiveUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <Users
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        acceptFollow={this.props.acceptFollow}
        acceptUnfollow={this.props.acceptUnfollow}
        onPageChanged={this.onPageChanged}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: state.usersPageD.totalUsersCount,
    pageSize: state.usersPageD.pageSize,
    currentPage: state.usersPageD.currentPage,
    isFetching: state.usersPageD.isFetching,
    followingInProgress: state.usersPageD.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    acceptFollow,
    acceptUnfollow,
    receiveUsers,
    toggleFollowingInProgress,
  }),
  withAuthRedirect
)(UsersContainer);
