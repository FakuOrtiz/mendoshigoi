/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { db } from "../../firebaseconfig";
import Loading from "../loading/Loading";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const postRef = doc(db, "posts", id);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDoc(postRef);
      setPost(data.data());
    };
    getPosts();
  }, []);

  if (!post.title) return <Loading />;

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button className={styles.btnPost} onClick={() => navigate("/")}>
          VOLVER
        </button>
      </div>
      <div>
        <div className={styles.titleContainer}>
          <div>
            <h1 className={styles.title}>{post?.title}</h1>
          </div>
          <div>
            <p>Por {post.author?.name}</p>
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </div>
  );
};

export default Post;