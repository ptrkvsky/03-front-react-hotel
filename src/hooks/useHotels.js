import { useEffect, useState } from "react";
import utils from  '../utils/const'

const useHotels = () => {
  const [hotels, setHotels] = useState({});
  useEffect(() => {

    fetch(`http://178.62.113.122:8080/hotels/test`)
      .then(body => body.json())
      .then(response => {     
          console.log(response)   
          setHotels(response);
      });
  }, []);
  return [hotels, setHotels];
};

export default useHotels;
