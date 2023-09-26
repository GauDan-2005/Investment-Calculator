import React from "react";

import "./Footer.css";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <div>
      <hr className="hr-thin" />
      <p className="footer-text">© Copyright GauravSingh {currYear}</p>
    </div>
  );
}

export default Footer;
