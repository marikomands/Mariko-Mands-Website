import react from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="linkHeader" to="/image-search">
        Search Image App (API and Hooks)
      </Link>
      <Link className="linkHeader" to="/clothing-list">
        Clothes Shopping (API, Redux and Hooks)
      </Link>
      <a
        className="linkHeader"
        href="https://github.com/marikomands"
        target="_blank"
      >
        My Github
      </a>
      <Link className="linkHeader" to="/calculator">
        React Calculator
      </Link>
    </div>
  );
};

export default Header;
