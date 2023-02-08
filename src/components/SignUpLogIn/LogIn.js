import { bigLogo } from "../../assets/images/images";

import LoginComponent from "../ModalAndSignUpSignIn/LogIn";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <div className={styles.logInContainer}>
      <div className={`${styles.logIn} container`}>
        <div className={styles.logoContainer}>
          <img src={bigLogo} alt="#" className={styles.logo} />
        </div>
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;
