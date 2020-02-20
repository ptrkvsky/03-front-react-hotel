import PropTypes from "prop-types";
import React from "react";
import BarList from "./bar/BarList";

const Home = ({ bars }) => {
  return (
    <div>
      <h1 className="primary-title">Les bars de Toulouse</h1>
      <BarList bars={bars} />
    </div>
  );
};

Home.propTypes = {
  bars: PropTypes.array
};

export default Home;
