import React from "react"

const FiltreNom = ({ stateForm, setStateForm }) => {

    const handleChange = (event) => {
        const copyStateForm = { ...stateForm }
        copyStateForm.searchNom = event.target.value.toUpperCase();
        setStateForm(copyStateForm)
    }

    return <input name="searchNom" className="ipt-search" onChange={(event) => handleChange(event)} value={stateForm.search} placeholder="Nom de l'hôtel" type="text" />
}

export default FiltreNom;
