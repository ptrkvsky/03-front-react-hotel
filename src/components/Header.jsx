import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, Nav, Logo } from "../styles/components/header";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>Hôtel App</Logo>
      </Link>
      <Nav>
        <Link to="/"></Link>
        <Link to="/me"></Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
