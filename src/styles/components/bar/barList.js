import styled from "@emotion/styled";
import mediaQueries from "../../mediaQueries";

const Grid = styled("section")`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5%;
  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`;

export { Grid };
