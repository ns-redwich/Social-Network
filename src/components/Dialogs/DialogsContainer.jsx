import {
  addMessageActionCreator,
  UpdateMessageInputValueActionCreator,
} from "../../redux/reducers/dialogsReducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPageD: state.dialogsPageD,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: () => {
      const cleanText = "";
      dispatch(addMessageActionCreator());
      dispatch(UpdateMessageInputValueActionCreator(cleanText));
    },
    changeNewMessageInput: (text) => {
      dispatch(UpdateMessageInputValueActionCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
