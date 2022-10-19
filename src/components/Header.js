import react from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/image-search">My Work with Hooks (Search Image App.)</Link>
      <a href="https://github.com/marikomands">My Github</a>
    </div>
  );
};

export default Header;
