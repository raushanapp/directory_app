import React from "react";
import styles from "../style/home.module.css";
import { FiFolderPlus } from "react-icons/fi";

export const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.headingFolderName}>Folder Directory</h1>
      <FiFolderPlus className={styles.folderIcons} />
    </div>
  );
};
