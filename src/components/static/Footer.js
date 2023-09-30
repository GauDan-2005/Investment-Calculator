import React from "react";

import Styles from "./Footer.module.css";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <div className={Styles.footer}>
      <hr className={Styles["hr-thin"]} />
      <p className={Styles["footer-text"]}>
        © Copyright GauravSingh {currYear}
      </p>
    </div>
  );
}

export default Footer;
