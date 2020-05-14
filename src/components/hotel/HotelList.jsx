import PropTypes from "prop-types";
import React from "react";
import Hotel from "../hotel/Hotel";
import Loading from "../Loading";
import { Grid } from "../../styles/components/bar/barList";

const HotelList = ({ hotels }) => {

  if (hotels.content !== undefined) {
    return (
      <>
        <p className="extra-bold">
          {hotels.totalElements} <span className="f400">Hôtels</span>
        </p>
        <Grid>
          {hotels.content.map(hotel => (
            <Hotel key={hotel.nuhotel} hotel={hotel} />
          ))}
        </Grid>
      </>
    );
  } else {
    return <Loading />;
  }
};

HotelList.propTypes = {
  Hotels: PropTypes.array
};

export default HotelList;
