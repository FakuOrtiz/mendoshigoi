import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./CreatePost.module.css";

const createPost = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.createPostContainer}>
        <div>
          <h2 className={styles.title}>Crear un posteo.</h2>
        </div>
        <div className={styles.inputTitleContainer}>
          <input type="text" placeholder="Título" className={styles.input} />
        </div>
        {/* <div>
          <p>Descripción:</p>
          <textarea placeholder="Según el número de manchas rojas se distinguen..."></textarea>
        </div> */}
        <div className={styles.textareaContainer}>
          <ReactQuill
            className={styles.textarea}
            modules={modules}
            formats={formats}
            placeholder="Según el número de manchas rojas se distinguen..."
          />
        </div>
        <div>
          <button className={styles.btnPost}>PUBLICAR</button>
        </div>
      </div>
    </div>
  );
};

export default createPost;
