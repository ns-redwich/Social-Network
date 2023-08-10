const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_MESSAGE_INPUT_VALUE = "UPDATE_MESSAGE_INPUT_VALUE";

let initialState = {
  dialogsD: [
    { id: 1, name: "Ann" },
    { id: 2, name: "Nikita" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Steve" },
    { id: 5, name: "Maria" },
    { id: 6, name: "Bill" },
  ],
  messagesD: [
    { name: "Bill", message: "Hello, Ann!" },
    { name: "Bill", message: "How is your social network?" },
    { name: "Ann", message: "Everything is fine." },
  ],
  MessageInputV: "",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === ADD_NEW_MESSAGE) {
    let newMessage = {
      name: "Ivan",
      message: state.MessageInputV,
    };
    stateCopy.messagesD = [...state.messagesD];
    stateCopy.messagesD.push(newMessage);
  } else if (action.type === UPDATE_MESSAGE_INPUT_VALUE) {
    stateCopy.MessageInputV = action.newText;
  }

  return stateCopy;
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_NEW_MESSAGE,
  };
};
export const UpdateMessageInputValueActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_INPUT_VALUE,
    newText: text,
  };
};

export default dialogsReducer;
