import { useState, useEffect } from "react";

const useBars = () => {
  const [me, setMe] = useState([]);

  useEffect(() => {
    fetch(`https://control-server.now.sh/me`)
      .then(body => body.json())
      .then(response => {
        console.log(response);
        setMe(response);
      });
  }, []);

  return [me];
};

export default useBars;
