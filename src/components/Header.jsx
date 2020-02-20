import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <Header>
      Header
      <nav>
        <Link to="/">Home</Link>
        <Link to="/component">Component</Link>
      </nav>
    </Header>
  );
};

export default Header;
