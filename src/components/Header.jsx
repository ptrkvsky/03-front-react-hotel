import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, Nav, Logo } from "../styles/components/header";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>🍺 Bar App</Logo>
      </Link>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/me">Me</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
