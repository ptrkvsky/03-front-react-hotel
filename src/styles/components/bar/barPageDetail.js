import styled from "@emotion/styled";
import theme from "../../theme";
import mediaQueries from "../../mediaQueries";

const GridProduct = styled("article")`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 40px;
  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const DescProduct = styled("div")`
  margin-top: 20px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const Address = styled("div")`
  margin-bottom: 20px;
  line-height: 1.5;
  font-style: italic;
`;

export { GridProduct, DescProduct, Address };
