import React from "react";
import styles from "./NoSearch.module.css";
import imgNoSearch from "../../assets/noSearch.png";

const NoSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerP}>
        <p>No se encontraron resultados...</p>
      </div>
      <img
        src={imgNoSearch}
        alt="No se encontraron resultados"
        className={styles.image}
      />
    </div>
  );
};

export default NoSearch;
