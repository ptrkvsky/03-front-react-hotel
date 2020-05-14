import React from "react";
import ItemPagination from './ItemPagination'

const PaginationHotel = ({ hotels }) => {
    const iteratePagination = () => {
        const allItems = [];
        for (let index = 0; index < hotels.totalPages; index++) {
            allItems.push(index)
        }
        const allElemPagination = allItems.map((item, index) => {
            return <ItemPagination numPage={item} />
        })
        return allElemPagination;
    }

    return (
        <section style={{ marginTop: "170px" }} className="pagination">
            {iteratePagination()}
        </section>
    )
}

export default PaginationHotel;