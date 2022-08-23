import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreatePost from "./components/createPost/CreatePost";
import Login from "./components/login/Login";
import NavBar from "./components/navBar/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    let getAuth = localStorage.getItem("isAuth");
    setIsAuth(getAuth);
  }, []);

  return (
    <>
      <NavBar setIsAuth={setIsAuth} isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
