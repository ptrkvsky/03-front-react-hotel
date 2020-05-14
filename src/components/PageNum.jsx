import PropTypes from "prop-types";
import React from "react";
import { useParams } from "react-router-dom";
import HotelList from "./hotel/HotelList";
import HotelFiltres from "./hotel/HotelFiltres";
import BlockPagination from "./pagination/BlockPagination"
import usePaginationHotel from "../hooks/usePaginationHotel"


const PageNum = ({ hotels, categoriesChambre }) => {
    let { id } = useParams();
    const [hotelsPagined, setHotelsPagined] = usePaginationHotel(id)
  return (
    <div>
      <h1 className="primary-title">Hôtels Page {id} </h1>
      <HotelFiltres categoriesChambre={categoriesChambre} />
      <HotelList hotels={hotelsPagined} />

      <BlockPagination hotels={hotels} />
    </div>
  );
};

PageNum.propTypes = {
  bars: PropTypes.array
};

export default PageNum;
