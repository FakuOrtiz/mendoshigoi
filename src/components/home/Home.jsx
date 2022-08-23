/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { db } from "../../firebaseconfig";
import noPhoto from "../../assets/noPhoto.png";
import styles from "./Home.module.css";
import Loading from "../loading/Loading";
import { Toaster } from "react-hot-toast";
import NoSearch from "../noSearch/NoSearch";

const Home = ({ postsLists, setPostsLists, postsSearch, setPostsSearch }) => {
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostsLists(data.docs?.map((d) => ({ ...d.data(), id: d.id })));
      setPostsSearch(data.docs?.map((d) => ({ ...d.data(), id: d.id })));
    };
    getPosts();
  }, []);

  if (postsLists.length === 0) return <Loading />;
  if (postsSearch.length === 0) return <NoSearch />;

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {postsSearch?.map((p) => {
          return (
            <NavLink to={`/post/${p.id}`} key={p.id} className={styles.link}>
              <div className={styles.individualContainer}>
                <div className={styles.imgNameContainer}>
                  <div>
                    <img
                      src={p.author.photo ? p.author.photo : noPhoto}
                      alt={p.author.name}
                      className={styles.authorImage}
                    />
                  </div>
                  <div>
                    <h3>{p.author.name}</h3>
                  </div>
                </div>
                <div className={styles.titleDateContainer}>
                  <div>
                    <h2>{p.title}</h2>
                  </div>
                  <div>
                    <p>Publicado el {p.date}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
