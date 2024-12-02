import React from "react";
import "../style.css";

function Footer() {
  return (
    <footer>
      <div>© {new Date().getFullYear()} InfoLingo. All rights reserved.</div>
    </footer>
  );
}

export default Footer;