import React from "react";
import styles from "./Loading.module.css";
const Loading = ({ type = "general" }) => {
  return type == "general" ? (
    <div className="d-flex  flex-row justify-content-center  align-self-center">
    <div className={`${styles.loader} ${styles.normal}`} />
    </div>
  ) : (
      <div className={`${styles.loader} ${styles.button}`} />
  );
};

export default Loading;
