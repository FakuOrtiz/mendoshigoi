import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreatePost from "./components/createPost/CreatePost";
import Login from "./components/login/Login";
import NavBar from "./components/navBar/NavBar";
import { useEffect, useState } from "react";
import Post from "./components/post/Post";
import NavBarWithoutSearch from "./components/navBarWithoutSearch/NavBarWithoutSearch";

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar
                setIsAuth={setIsAuth}
                isAuth={isAuth}
                postsLists={postsLists}
                setPostsSearch={setPostsSearch}
              />
              <Home
                postsLists={postsLists}
                setPostsLists={setPostsLists}
                postsSearch={postsSearch}
                setPostsSearch={setPostsSearch}
              />
            </>
          }
        />
        <Route
          path="/createpost"
          element={
            <>
              <NavBarWithoutSearch setIsAuth={setIsAuth} isAuth={isAuth} />
              <CreatePost isAuth={isAuth} />
            </>
          }
        />
        <Route
          path="/post/:id"
          element={
            <>
              <NavBarWithoutSearch setIsAuth={setIsAuth} isAuth={isAuth} />
              <Post />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <NavBarWithoutSearch setIsAuth={setIsAuth} isAuth={isAuth} />
              <Login setIsAuth={setIsAuth} />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NavBar
                setIsAuth={setIsAuth}
                isAuth={isAuth}
                postsLists={postsLists}
                setPostsSearch={setPostsSearch}
              />
              <Home />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
