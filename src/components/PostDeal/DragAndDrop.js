import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { dragDrop } from "../../assets/images/images";
import styles from "./styles.module.css";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className={styles.dragDropContainer}>
          <img src={dragDrop} alt="#" className={styles.dragDrop} />
          <p className={`${styles.label} ${styles.dropText}`}>Drop file here</p>
        </div>
      ) : (
        <div className={styles.dragDropContainer}>
          <img src={dragDrop} alt="#" className={styles.dragDrop} />
          <p className={`${styles.label} ${styles.dropText}`}>
            Drag files from your computer or{" "}
            <span className={styles.choose}>choose a file</span> to attach.
          </p>
        </div>
      )}
    </div>
  );
}
export default MyDropzone;
