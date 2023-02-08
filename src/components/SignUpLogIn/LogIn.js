import { bigLogo } from "../../assets/images/images";

import WelcomeBack from "../ModalAndSignUpSignIn/WelcomeBack";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <div className={styles.logInContainer}>
      <div className={`${styles.logIn} container`}>
        <div className={styles.logoContainer}>
          <img src={bigLogo} alt="#" className={styles.logo} />
        </div>
        <WelcomeBack />
      </div>
    </div>
  );
};

export default Login;
