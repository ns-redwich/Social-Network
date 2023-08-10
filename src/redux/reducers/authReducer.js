import { authApi, securityApi } from "../../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { userId, email, login, isAuth },
  };
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
  };
};

export const checkIsAuthUser = () => (dispatch) => {
  return authApi.getAuthUser().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login =
  (email, password, rememberMe = false, captcha = null) =>
  (dispatch) => {
    authApi.login(email, password, rememberMe, captcha).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(checkIsAuthUser());
      } else {
        dispatch(getCaptchaUrl());
      }
    });
  };

export const logout = () => (dispatch) => {
  authApi.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export const getCaptchaUrl = () => async (dispatch) => {
  const data = securityApi.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default usersReducer;
