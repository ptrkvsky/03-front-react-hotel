import PropTypes from "prop-types";
import React from "react";
import Hotel from "./Hotel";
import Loading from "../Loading";
import { Grid } from "../../styles/components/Hotel/HotelList";

const HotelList = ({ Hotels }) => {
  if (Hotels.length > 0) {
    return (
      <Grid>
        {Hotels.map(Hotel => (
          <Hotel key={Hotel.content.nuhotel} Hotel={Hotel.content} />
        ))}
      </Grid>
    );
  } else {
    return <Loading />;
  }
};

HotelList.propTypes = {
  Hotels: PropTypes.array
};

export default HotelList;
