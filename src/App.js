import "./App.css";
import Login from "./components/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, { Suspense } from "react";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const News = React.lazy(() =>
  import("./components/News/News")
);
const Music = React.lazy(() =>
  import("./components/Music/Music")
);
const Settings = React.lazy(() =>
  import("./components/Settings/Settings")
);

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={<Navigate to="/profile" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile">
              <Route index element={<ProfileContainer />} />
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
