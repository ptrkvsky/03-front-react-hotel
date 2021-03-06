import { useEffect, useState } from "react";

const useHotelDetail = (id) => {
  const [hotelDetail, setHotelDetail] = useState({});

  useEffect(() => {
    fetch(`http://178.62.113.122:8080/hotels/${id}`)
      .then(body => body.json())
      .then(response => {
          setHotelDetail(response);
      });
  }, []);

  return [hotelDetail, setHotelDetail];
};

export default useHotelDetail;
