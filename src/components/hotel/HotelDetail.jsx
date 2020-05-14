import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import useTypeHotelDetail from  "../../hooks/useHotel"

const HotelDetail = () =>{
    let { id } = useParams();
    const [typeHotel, setTypeHotel] = useState("");

    const [hotelDetail, setHotelDetail] = useTypeHotelDetail(id);
    

    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
        if(hotelDetail.typeHotel){
            setTypeHotel(hotelDetail.typeHotel.nomtype);
        }
    },[hotelDetail]);

    return(
    <div>
        <h1 className="primary-title" >{hotelDetail.nomhotel}</h1>
        <p>Type Hotel : {typeHotel}</p>
        <p style={{marginTop: '30px'}}>Adresse : {hotelDetail.nomhotel}</p>    
        <p>Code Postal : {hotelDetail.cphotel}</p>
        <p>Ville : {hotelDetail.villehotel}</p>
    </div>
    )
}

export default HotelDetail
