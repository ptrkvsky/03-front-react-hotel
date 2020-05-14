import PropTypes from "prop-types";
import React from "react";
import HotelList from "./hotel/HotelList";
import HotelFiltres from "./hotel/HotelFiltres";
import BlockPagination from "./pagination/BlockPagination"
import { BannerHome, ContainerHome } from "../styles/components/homePage"

const Home = ({ hotels, categoriesChambre, setHotels }) => {
  return (
    <div>
      <BannerHome className="banner">
        <div className="max-container relative">
          <h1>
            <span className="item city">Bagdad</span>
            <span className="item country">Afghanistan</span>
          </h1>
        </div>
      </BannerHome>
      <ContainerHome className="max-container">
        <HotelFiltres setHotels={setHotels} categoriesChambre={categoriesChambre} />
        <HotelList hotels={hotels} />

        <BlockPagination hotels={hotels} />
      </ContainerHome>
    </div>
  );
};

Home.propTypes = {
  bars: PropTypes.array
};

export default Home;
