import PropTypes from "prop-types";
import React from "react";
import Bar from "./Bar";
import Loading from "../Loading";
import { Grid } from "../../styles/components/bar/barList";

const BarList = ({ bars }) => {
  if (bars.length > 0) {
    return (
      <Grid>
        {bars.map(bar => (
          <Bar key={bar.id} bar={bar} />
        ))}
      </Grid>
    );
  } else {
    return <Loading />;
  }
};

BarList.propTypes = {
  bars: PropTypes.array
};

export default BarList;
