import React from 'react'
import styles from "./Loading.module.css"
import loading from "../../assets/loading.gif"

const Loading = () => {
  return (
    <div className={styles.container}>
        <img src={loading} alt="Cargando" className={styles.loading} />
    </div>
  )
}

export default Loading