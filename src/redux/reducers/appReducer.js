import { checkIsAuthUser } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const setInitialized = () => {
  return {
    type: SET_INITIALIZED,
  };
};

export const initializeApp = () => async (dispatch) => {
  await dispatch(checkIsAuthUser());
  dispatch(setInitialized());
};

export default appReducer;
