import { useEffect, useState } from "react";

const useTypeHotelDetail = (id) => {
  const [typeHotelDetail, setTypeHotelDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9090/type-hotel/${id}`)
      .then(body => body.json())
      .then(response => {
        console.log(response)
        setTypeHotelDetail(response);
      });
  }, []);

  return [typeHotelDetail, setTypeHotelDetail];
};

export default useTypeHotelDetail;
