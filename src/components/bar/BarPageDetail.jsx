import PropTypes, { checkPropTypes } from "prop-types";
import React from "react";
import { useParams } from "react-router-dom";
import Illu from "./detail/Illu";
import Infos from "./detail/Infos";

import {
  GridProduct,
  DescProduct,
  Address
} from "../../styles/components/bar/barPageDetail.js";

const BarPageDetail = ({ bars, setBars }) => {
  let { id } = useParams();

  const bar = bars.filter(bar => bar.id === id);

  if (bars.length > 0) {
    return (
      <>
        <GridProduct>
          <div className="illu">
            <Illu alt={bar[0].title} />
          </div>
          <div>
            <Infos bars={bars} setBars={setBars} id={id} />
          </div>
        </GridProduct>
      </>
    );
  } else {
    return <div>Loading</div>;
  }
};

BarPageDetail.propTypes = {
  bars: PropTypes.array.isRequired,
  setBars: PropTypes.func.isRequired
};

export default BarPageDetail;
