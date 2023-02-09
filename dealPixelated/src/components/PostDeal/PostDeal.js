import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import Input from "../Input/Input";
import MyDropzone from "./DragAndDrop";
import styles from "./styles.module.css";

const PostDeal = ({ setPostDeal }) => {
  const [values, setValues] = useState({
    dealurl: "",
    dealtitle: "",
    originalprice: "",
    disconuntprice: "",
    expirytime: "",
    category: "",
    marketplace: "",
    brand: "",
    secondbrand: "",
    store: "",
    description: "",
  });
  const [textAreaCount, setTextAreaCount = 250] = useState(0);

  const inputs = [
    {
      label: "Deal URL",
      type: "text",
      name: "dealurl",
      placeholder: "Placeholder text",
    },
    {
      label: "Deal Title",
      type: "text",
      name: "dealtitle",
      placeholder: "John Doe",
    },
    {
      label: "Original Price",
      type: "text",
      name: "originalprice",

      placeholder: "Placeholder text",
    },
    {
      label: "Discounted Price",
      type: "text",
      name: "disconuntprice",
      placeholder: "Placeholder text",
    },
    {
      label: "Expiry Time",
      type: "text",
      name: "expirytime",
      placeholder: "Placeholder text",
    },
    {
      label: "Category",
      type: "text",
      name: "category",
      placeholder: "Placeholder text",
    },
    {
      label: "Marketplace",
      type: "text",
      name: "marketplace",
      placeholder: "Placeholder text",
    },
    {
      label: "Brand",
      type: "text",
      name: "brand",
      placeholder: "Placeholder text",
    },
    {
      label: "Brand",
      type: "text",
      name: "secondbrand",
      placeholder: "Placeholder text",
    },
    {
      label: "Store",
      type: "text",
      name: "store",
      placeholder: "Placeholder text",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const recalculate = (e) => {
    setTextAreaCount(e.target.value.length);
    onChange(e);
  };
  const hideModal = () => {
    setPostDeal(false);
  };
  return (
    <>
      <section className={styles.postDealsContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Post a Deal</h2>
          <TfiClose className={styles.close} onClick={hideModal} />
        </div>
        <form className={styles.form}>
          <div className={styles.inputs}>
            {inputs.map((el, i) => (
              <Input
                {...el}
                key={i}
                value={values[el.name]}
                onChange={onChange}
              />
            ))}
          </div>
          <div className={styles.labelContainer}>
            <label htmlFor="description" className={`${styles.label} }`}>
              Description
            </label>
            <span className={styles.outof}>{textAreaCount}/200</span>
          </div>
          <textarea
            className={styles.textArea}
            maxLength={200}
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={values["description"]}
            onChange={recalculate}
          ></textarea>
          <div className={styles.dragAndChooseContainer}>
            <label className={styles.label}>Images & Attachments</label>
            <div className={styles.dragAndChose}>
              {" "}
              <MyDropzone />
              {/* <p className={styles.label}>
              Drag files from your computer or{" "}
              <span className={styles.choose}>choose a file</span> to attach.
            </p> */}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={() => {
                hideModal();
              }}
            >
              Preview Deal
            </button>
            <button
              className={`${styles.button} ${styles.activeButton}`}
              onClick={() => {
                hideModal();
              }}
            >
              Submit New Deal
            </button>
          </div>
        </form>
      </section>{" "}
      <div className={styles.overlay}></div>
    </>
  );
};
export default PostDeal;
