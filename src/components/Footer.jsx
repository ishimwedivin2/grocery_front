import React from "react";
import "../styles/styles.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg ">
        <p className="footer__text">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/ishimwedivin2/"
            target="_blank"
            rel="noopener"
          >
            Ishimwe Divin
          </a>{" "}
          &copy; 2024 Grocery Store
        </p>
      </footer>
    </div>
  );
};

export default Footer;
