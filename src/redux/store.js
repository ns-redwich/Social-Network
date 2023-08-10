import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";

let store = {
  _state: {
    profilePageD: {
      postsD: [
        {
          avatar: "avatar.jpg",
          name: "Ivan Ivanov",
          text: "Hello, my friends! Today I will be making a tasty cake for my mum.",
        },
        {
          avatar: "avatar.jpg",
          name: "Ivan Ivanov",
          text: "The cake was very tasty!",
        },
      ],
      inputV: "",
    },
    dialogsPageD: {
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
    },
  },
  rerender() {
    console.log("State changed.");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerender = observer;
  },

  dispatch(action) {
    this._state.profilePageD = profileReducer(this._state.profilePageD, action);
    this._state.dialogsPageD = dialogsReducer(this._state.dialogsPageD, action);

    this.rerender(this._state);
  },
};

export default store;
