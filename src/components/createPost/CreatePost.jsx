/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebaseconfig";
import { useNavigate } from "react-router";
import styles from "./CreatePost.module.css";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");

  const handlePost = async () => {
    try {
      await addDoc(postsCollectionRef, {
        title,
        body,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.createPostContainer}>
        <div>
          <h2 className={styles.title}>Crear un posteo.</h2>
        </div>
        <div className={styles.inputTitleContainer}>
          <input
            type="text"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.textareaContainer}>
          <ReactQuill
            className={styles.textarea}
            modules={modules}
            formats={formats}
            placeholder="Según el número de manchas rojas se distinguen..."
            value={body}
            onChange={setBody}
          />
        </div>
        <div>
          <button className={styles.btnPost} onClick={handlePost}>
            PUBLICAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
