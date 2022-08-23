/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { db, auth } from "../../firebaseconfig";
import Loading from "../loading/Loading";
import toast, { Toaster } from "react-hot-toast";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const postRef = doc(db, "posts", id);

  const handleDeletePost = async () => {
    await deleteDoc(postRef);
    navigate("/");
    setTimeout(() => {
      toast.success("¡Post eliminado correctamente!");
    }, 1300);
  };

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
      <Toaster />
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
          <div>
            <img
              src={post.author?.photo}
              alt={post.author?.name}
              className={styles.photo}
            />
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
      {auth?.lastNotifiedUid === post.author?.id && (
        <div className={styles.btnContainerDelete}>
          <button className={styles.btnPost} onClick={handleDeletePost}>
            Eliminar post
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
