import react from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/image-search">My Work with Hooks (Search Image App.)</Link>
      <a href="https://github.com/marikomands" target="_blank">
        My Github
      </a>
      <Link to="/calculator">React Calculator</Link>
    </div>
  );
};

export default Header;
