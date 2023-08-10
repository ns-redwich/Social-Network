import { usersApi } from "../../api/api";
import { followApi } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  totalUsersCount: 1,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [2, 3],
};

const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === FOLLOW) {
    stateCopy.users = state.users.map((user) => {
      if (user.id === action.id) {
        return { ...user, followed: true };
      }
      return user;
    });
  } else if (action.type === UNFOLLOW) {
    stateCopy.users = state.users.map((user) => {
      if (user.id === action.id) {
        return { ...user, followed: false };
      }
      return user;
    });
  } else if (action.type === SET_USERS) {
    return { ...state, users: action.users };
  } else if (action.type === SET_TOTAL_USERS_COUNT) {
    return { ...state, totalUsersCount: action.count };
  } else if (action.type === SET_CURRENT_PAGE) {
    return { ...state, currentPage: action.pageNumber };
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  } else if (action.type == TOGGLE_FOLLOWING_PROGRESS) {
    return {
      ...state,
      followingInProgress: action.isFetchingFollowing
        ? [...state.followingInProgress, action.userId]
        : [...state.followingInProgress.filter((id) => id != action.userId)],
    };
  }

  return stateCopy;
};

export const acceptFollow = (userId) => {
  return {
    type: FOLLOW,
    id: userId,
  };
};
export const acceptUnfollow = (userId) => {
  return {
    type: UNFOLLOW,
    id: userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};
export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count,
  };
};
export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleFollowingInProgress = (isFetchingFollowing, userId) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetchingFollowing,
    userId,
  };
};

export const receiveUsers = (currentPage, pageSize) => {
  // Thunk Creator
  return (dispatch) => {
    dispatch(setIsFetching(true));

    usersApi.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(setIsFetching(false));
      dispatch(setUsers(response.data.items));
      dispatch(setTotalUsersCount(response.data.totalCount));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followApi.follow(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(acceptFollow(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followApi.unfollow(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(acceptUnfollow(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
