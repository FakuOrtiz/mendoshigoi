import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreatePost from "./components/createPost/CreatePost";
import Login from "./components/login/Login";
import NavBar from "./components/navBar/NavBar";
import { useEffect, useState } from "react";
import Post from "./components/post/Post";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [postsLists, setPostsLists] = useState([]);
  const [postsSearch, setPostsSearch] = useState([]);

  useEffect(() => {
    let getAuth = localStorage.getItem("isAuth");
    setIsAuth(getAuth);
  }, []);

  return (
    <>
      <NavBar
        setIsAuth={setIsAuth}
        isAuth={isAuth}
        postsLists={postsLists}
        setPostsSearch={setPostsSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              postsLists={postsLists}
              setPostsLists={setPostsLists}
              postsSearch={postsSearch}
              setPostsSearch={setPostsSearch}
            />
          }
        />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
