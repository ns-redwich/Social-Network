import { profileApi } from "../../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_INPUT_VALUE = "UPDATE-INPUT-VALUE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  postsD: [
    {
      avatar: "/avatar.png",
      name: "Ivan Ivanov",
      text: "Hello, my friends! I'm cooking cake.",
    },
    {
      avatar: "/avatar.png",
      name: "Ivan Ivanov",
      text: "The cake was very tasty!",
    },
  ],
  inputV: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === ADD_NEW_POST) {
    let newPost = {
      avatar: "avatar.png",
      name: "Ivan Ivanov",
      text: state.inputV,
    };
    stateCopy.postsD = [...state.postsD];
    stateCopy.postsD.unshift(newPost);
  } else if (action.type === UPDATE_INPUT_VALUE) {
    stateCopy.inputV = action.newText;
  } else if (action.type === SET_USER_PROFILE) {
    stateCopy.profile = action.profile;
  } else if (action.type === SET_PROFILE_STATUS) {
    stateCopy.status = action.status;
  } else if (action.type === SAVE_PHOTO_SUCCESS) {
    return { ...state, profile: { ...state.profile, photos: action.photos } };
  }

  return stateCopy;
};

export const addPostActionCreator = () => {
  return {
    type: ADD_NEW_POST,
  };
};
export const UpdateInputValueActionCreator = (text) => {
  return {
    type: UPDATE_INPUT_VALUE,
    newText: text,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status,
  };
};
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

export const getProfileData = (userId) => (dispatch) => {
  profileApi.getUserProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getProfileStatus = (userId) => (dispatch) => {
  profileApi.getProfileStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateProfileStatus = (status) => (dispatch) => {
  profileApi.updateProfileStatus(status).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileApi.savePhoto(file);

  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  let userId = getState().auth.userId;
  let response = await profileApi.saveProfile(profile);
  console.log(response.resultCode);

  if (response.data.resultCode === 0) {
    dispatch(getProfileData(userId));
  } else {
    console.log(response.data.messages);
  }
};

export default profileReducer;
