import Home from "./routes/home/home.page";
import NavBar from "./routes/navbar/navbar.component";
import Profile from "./routes/profile/profile.component";
import SingleProfile from "./routes/singleProfile/singlep.component";
import Chat from "./routes/chat/chat.component";
import Login from "./routes/login/login.component";

import { Route, Routes } from "react-router-dom";

import "./index.scss";
import Register from "./routes/register/register.component";

const App = () =>  {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="singleprofile/:id" element={<SingleProfile />} />
        <Route path="chatroom/:id" element={<Chat />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
