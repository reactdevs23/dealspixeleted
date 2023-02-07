import React from "react";
import { logo, telephone, email } from "../../assets/images/images";
import styles from "./Footer.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";

const Footer = () => {
  const aboutus = [
    [
      { item: "About us", to: "#" },
      { item: "Help center", to: "#" },
      { item: "Deal alerts", to: "#" },
      { item: "Contact us", to: "#" },
    ],
    [
      { item: "Our Blog", to: "#" },
      { item: "Privacy policy", to: "#" },
      { item: "Other terms and conditions", to: "#" },
      { item: "Advertising Opportunities", to: "#" },
    ],
  ];
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="#" className={styles.logo} />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className={styles.linkWrapper}>
          <div className={styles.linkContainer}>
            <div>
              <h2 className={styles.textTitle}>ANY QUERY</h2>
              <div className={styles.box}>
                <img src={telephone} alt="#" className={styles.icon} />
                <p className={styles.timeAndContainer}>
                  {" "}
                  <span className={styles.time}>9 am - 8 pm</span>
                  <span className={styles.number}>00495590304</span>
                </p>
              </div>
              <div>
                <div className={styles.box}>
                  <img src={email} alt="#" className={styles.icon} />
                  <p className={styles.timeAndContainer}>
                    {" "}
                    <span className={styles.time}>any time</span>
                    <span className={styles.email}>youremail@.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className={styles.textTitle}>About </h2>
              <div className={styles.allLink}>
                <div>
                  {" "}
                  {aboutus[0].map((el, i) => (
                    <div key={i} className={styles.arrowAnditem}>
                      <RxDoubleArrowRight className={styles.arrow} />
                      <span className={styles.item}>{el.item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  {aboutus[1].map((el, i) => (
                    <div key={i} className={styles.arrowAnditem}>
                      <RxDoubleArrowRight className={styles.arrow} />
                      <span className={styles.item}>{el.item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
