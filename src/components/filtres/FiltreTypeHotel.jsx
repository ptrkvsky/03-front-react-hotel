import React, { useState } from "react";
import { LabelContainer, CheckMark } from "../../styles/components/Filtres"

const FiltreTypeHotel = ({ typeHotel, stateForm, setStateForm, index }) => {

	const handleChange = (e) => {
		const copyForm = { ...stateForm };

		if (e.target.checked) {
			if (!copyForm.typeHotel.includes(typeHotel.nutype)) {
				copyForm.typeHotel.push(typeHotel.nutype)
			}
		} else {
			if (copyForm.typeHotel.includes(typeHotel.nutype)) {
				const arrayFiltered = copyForm.typeHotel.filter(nutype => nutype != typeHotel.nutype)
				copyForm.typeHotel = arrayFiltered
			}
		}

		setStateForm(copyForm);
	}

	return (
		<LabelContainer forName={typeHotel.nutype}>
			{typeHotel.nomtype}
			<input value={stateForm.typeHotel[index]} onChange={(e) => handleChange(e)} type="checkbox" id={typeHotel.nutype} name="filter_type_hotel" />
			<CheckMark className="checkmark" />
		</LabelContainer>
	)
}

export default FiltreTypeHotel