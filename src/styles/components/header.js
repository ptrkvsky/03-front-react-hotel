import styled from "@emotion/styled";
import theme from "../theme";

const HeaderContainer = styled("header")`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Nav = styled("nav")`
  display: flex;
  justify-content: space-around;
  min-width: 100px;
`;

const Logo = styled("p")`
  display: block;
  font-size: 30px;
  color: #FFF;
  font-family: ${theme.fonts.logo};
  text-shadow: 2px 2px 2px #b0b0b0;
`;

export { HeaderContainer, Nav, Logo };
