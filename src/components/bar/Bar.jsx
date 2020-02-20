import PropTypes from "prop-types";
import React from "react";
import like from "../../images/like.svg";

import {
  BarContainer,
  BarTitle,
  DescriptionBar,
  LikeContainer,
  Footer
} from "../../styles/components/bar/bar";
import { Link } from "react-router-dom";

const Bar = ({ bar }) => {
  const { id, title, description, nbLike } = bar;

  return (
    <BarContainer>
      <BarTitle>{title}</BarTitle>
      <DescriptionBar>description {description} </DescriptionBar>

      <Footer>
        <Link to={`/bar/${id}`}>En savoir plus</Link>
        <LikeContainer>
          <img className="illu-like" src={like} alt="image" title="image" />
          {nbLike}
        </LikeContainer>
      </Footer>
    </BarContainer>
  );
};

Bar.propTypes = {
  bar: PropTypes.object
};

export default Bar;
