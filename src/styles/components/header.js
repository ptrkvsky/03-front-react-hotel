import styled from "@emotion/styled";
import theme from "../theme";

const HeaderContainer = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
`;

const Nav = styled("nav")`
  display: flex;
  justify-content: space-around;
  min-width: 100px;
`;

const Logo = styled("p")`
  display: block;
  font-size: 30px;
  color: ${theme.colors.main};
  font-family: ${theme.fonts.logo};
`;

export { HeaderContainer, Nav, Logo };
