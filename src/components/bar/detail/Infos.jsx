import PropTypes from "prop-types";
import React from "react";
import { useParams } from "react-router-dom";

import {
  DescProduct,
  Address
} from "../../../styles/components/bar/barPageDetail.js";

const Infos = ({ bars, setBars }) => {
  let { id } = useParams();

  const bar = bars.filter(bar => bar.id === id);

  const handleClick = () => {
    const newBars = bars.map(bar => {
      if (bar.id == id) {
        bar.nbLike++;
      }
      return bar;
    });
    setBars(newBars);
  };

  return (
    <>
      <h1 className="primary-title">{bar[0].title}</h1>
      <DescProduct>Description {bar[0].description}</DescProduct>
      <Address>Adress {bar[0].address}</Address>
      <button class="btn-primary" onClick={() => handleClick()}>
        {" "}
        Add Like
      </button>
      <p>NbLike : {bar[0].nbLike}</p>
    </>
  );
};

export default Infos;

Infos.propTypes = {
  bar: PropTypes.object
};
