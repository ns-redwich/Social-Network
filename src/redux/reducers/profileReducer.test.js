import profileReducer, { addPostActionCreator } from "./profileReducer";

test("addNewPost", () => {
  let state = {
    postsD: [
      {
        avatar: "avatar.png",
        name: "Ivan Ivanov",
        text: "Hello, my friends! Today I will be making a tasty cake for my mum.",
      },
      {
        avatar: "avatar.png",
        name: "Ivan Ivanov",
        text: "The cake was very tasty!",
      },
    ],
    inputV: "",
    profile: null,
    status: "",
  };
  let action = addPostActionCreator();

  profileReducer({ state }, { action });
  expect(linkElement).toBeInTheDocument();
});
