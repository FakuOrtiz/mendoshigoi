import React from "react";
import styles from "./Login.module.css";
import { auth, googleProvider } from "../../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  // const signInWithFacebook = () => {
  //   signInWithGoogle(auth, facebookProvider).then((res) => {
  //     localStorage.setItem("isAuth", true);
  //     setIsAuth(true);
  //     navigate("/");
  //     console.log(res);
  //   });
  // };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.btnContainer}>
          <button
            className={styles.loginWithGoogleBtn}
            onClick={signInWithGoogle}
          >
            Continuar con Google
          </button>
          {/* <button
            className={styles.loginWithFacebookBtn}
            onClick={signInWithFacebook}
          >
            Continuar con Facebook
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
