import React from "react";

const PaginationHotel = ({ numPage }) => {

    return (
        <a href={`/hotels/pages/${numPage}`}>Page {numPage} </a>
    )
}

export default PaginationHotel;