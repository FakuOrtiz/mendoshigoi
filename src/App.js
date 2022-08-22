import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreatePost from "./components/createPost/CreatePost";
import Login from "./components/login/Login";
import NavBar from "./components/navBar/NavBar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <NavBar setIsAuth={setIsAuth} isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </>
  );
}

export default App;
