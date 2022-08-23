/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import noPhoto from "../../assets/noPhoto.png";
import styles from "./Home.module.css";

const Home = () => {
  const [postsLists, setPostsLists] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostsLists(data.docs?.map((d) => ({ ...d.data(), id: d.id })));
    };
    getPosts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {postsLists?.map((p) => {
          return (
            <div key={p.id} className={styles.individualContainer}>
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
          );
        })}
      </div>
    </div>
  );
};

export default Home;
