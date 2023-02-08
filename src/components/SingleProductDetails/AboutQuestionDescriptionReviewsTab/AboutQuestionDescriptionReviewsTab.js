import React, { useState } from "react";
import { useDataContext } from "../../context";
import styles from "./styles.module.css";
import AboutOp from "./TabsComponent/AboutOp/AboutOp";
import Comment from "./TabsComponent/Comment/Comment";
import Desctiption from "./TabsComponent/Description/Description";
import QuestionAndAnswer from "./TabsComponent/QuestionAndAnswer/QuestionAndAnswer";

const AboutQuestionDescriptionReviewsTab = () => {
  const { bottom } = useDataContext();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "About the OP",
    "Product description",
    "Questions & answer",
    "Reviews",
  ];
  const allTabsComponent = [
    <AboutOp />,
    <Desctiption />,
    <QuestionAndAnswer />,
    <Comment />,
  ];
  return (
    <div className={styles.wrapper} ref={bottom}>
      <div className="container">
        <div className={styles.allTabs}>
          {tabs.map((el, i) => (
            <div
              key={i}
              className={`${styles.tab} ${i === activeTab && styles.activeTab}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.tabText}>{el}</span>
            </div>
          ))}
        </div>
        {allTabsComponent[activeTab]}
      </div>
    </div>
  );
};

export default AboutQuestionDescriptionReviewsTab;
