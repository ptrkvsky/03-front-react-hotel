import React from "react";
import { LabelContainer, CheckMark } from "../../styles/components/Filtres"

const FiltreChambre = ({ categorieChambre, stateForm, setStateForm, index }) => {

    const handleChange = (e) => {
        const copyForm = { ...stateForm };

        if (e.target.checked) {
            if (!copyForm.categorieChambre.includes(categorieChambre.nucat)) {
                copyForm.categorieChambre.push(categorieChambre.nucat)
            }
        } else {
            if (copyForm.categorieChambre.includes(categorieChambre.nucat)) {
                const arrayFiltered = copyForm.categorieChambre.filter(nucat => nucat != categorieChambre.nucat)
                copyForm.categorieChambre = arrayFiltered
            }
        }
        setStateForm(copyForm);
    }

    return (
        <LabelContainer forName={categorieChambre.nucat}>
            {categorieChambre.nomcat}
            <input type="checkbox" value="" id={categorieChambre.nucat} onChange={(e) => handleChange(e)} name="filter_room" />
            <CheckMark className="checkmark" />
        </LabelContainer>
    )
}

export default FiltreChambre