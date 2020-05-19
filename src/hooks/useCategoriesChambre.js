import { useEffect, useState } from "react";
import utils from  '../utils/const'

const useCategoriesChambre = () => {
  const [categoriesChambre, setCategoriesChambre] = useState({});
  useEffect(() => {
    fetch(`http://178.62.113.122:8080/categorie-chambre`)
      .then(body => body.json())
      .then(response => {
        setCategoriesChambre(response);
      });
  }, []);
  
  return [categoriesChambre, setCategoriesChambre];
};

export default useCategoriesChambre;