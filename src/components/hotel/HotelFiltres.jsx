import PropTypes from "prop-types";
import React, { useState } from "react";
import FiltreChambre from "../filtres/FiltreChambre"
import FiltreTypeHotel from "../filtres/FiltreTypeHotel"
import useTypesHotel from "../../hooks/useTypesHotel";
import Loading from "../Loading"
import FiltreNom from "../filtres/FiltreNom"
import { FilterContainer } from '../../styles/components/Filtres'

const HotelList = ({ categoriesChambre, setHotels }) => {
  const form = {
    searchNom: "",
    typeHotel: [],
    categorieChambre: [],
  }

  const [stateForm, setStateForm] = useState(form);
  const [typesHotel, setTypesHotel] = useTypesHotel();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (stateForm.categorieChambre.length > 0 || stateForm.typeHotel.length > 0) {
      fetch('http://localhost:8080/filter', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(stateForm),
      })
        .then(body => body.json())
        .then(response => {
          console.log(response)
          setHotels(response)
        });
    } else {
      console.log("NO FILTER");
      return false;
    }
  }

  if (categoriesChambre.length > 0 && typesHotel.length > 0) {
    return (
      <FilterContainer className="filtres">
        <form encType="multipart/form-data" method="post" onSubmit={(e) => handleSubmit(e)}>
          <div className="filtre cat-chambre">
            <h2 className="titre"> Chambres </h2>
            {categoriesChambre.map((categorieChambre, index) => <FiltreChambre key={`catchambre${index}`} stateForm={stateForm} setStateForm={setStateForm} index={index} categorieChambre={categorieChambre} />)}
          </div>
          <div className="filtre type-hotel">
            <h2 className="titre"> Standing </h2>
            {typesHotel.map((typeHotel, index) => <FiltreTypeHotel key={`typehotel${index}`} index={index} stateForm={stateForm} setStateForm={setStateForm} typeHotel={typeHotel} />)}
          </div>
          <div className="txt-field">
            <h2 className="titre"> Nom </h2>
            <FiltreNom stateForm={stateForm} setStateForm={setStateForm} />
            <input className="btn-primary valider" type="submit" value="Envoyer" />
          </div>
        </form>
      </FilterContainer>
    )
  } else {
    return <Loading />
  }
};


export default HotelList;