import { useEffect, useState } from "react";

const usePaginationHotel = (id) => {
  const [hotelsPagined, setHotelsPagined] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/hotels/pages/${id}`)
      .then(body => body.json())
      .then(response => {
        setHotelsPagined(response);
      });
  }, []);

  return [hotelsPagined, setHotelsPagined];
};

export default usePaginationHotel;
