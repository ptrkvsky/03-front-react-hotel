import { useEffect, useState } from "react";
import utils from  '../utils/const'

const useTypesHotel = () => {
  const [typesHotel, setTypesHotel] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8080/type-hotels`)
      .then(body => body.json())
      .then(response => {
        setTypesHotel(response);
      });
  }, []);
  
  return [typesHotel, setTypesHotel];
};

export default useTypesHotel;