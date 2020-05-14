import PropTypes from "prop-types";
import React from "react";
import like from "../../images/like.svg";

import {
  BarContainer,
  BarTitle,
  DescriptionBar,
  Footer
} from "../../styles/components/bar/bar";
import { Link } from "react-router-dom";

const Bar = ({ hotel }) => {

  return (
    <BarContainer>
      <BarTitle>{hotel.nomhotel.toLowerCase()}</BarTitle>
      <DescriptionBar>{hotel.adressehotel} </DescriptionBar>

      <Footer>
        <Link to={`/hotel/${hotel.nuhotel}`}>En savoir plus</Link>
      </Footer>
    </BarContainer>
  );
};

Bar.propTypes = {
  bar: PropTypes.object
};

export default Bar;
