import { useState } from "react";
import styles from "./styles.module.css";
const Reply = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea
        cols="50"
        className={styles.commentFormTextarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className={styles.commentFormButton}
        disabled={isTextareaDisabled}
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default Reply;
