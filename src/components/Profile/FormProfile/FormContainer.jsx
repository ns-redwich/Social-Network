import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  UpdateInputValueActionCreator,
} from "../../../redux/reducers/profileReducer";
import Form from "./Form";

let mapStateToProps = (state) => {
  return {
    inputV: state.profilePageD.inputV,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    InputValueChange: (text) => {
      dispatch(UpdateInputValueActionCreator(text));
    },
    addPost: () => {
      const textClear = "";
      dispatch(addPostActionCreator());
      dispatch(UpdateInputValueActionCreator(textClear));
    },
  };
};

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
