import styled from "@emotion/styled";
import theme from "../theme"

const FilterContainer = styled("section")`
    position: sticky;
    background: #f8f8f8;
    box-shadow: 0px 4px 5px #ececec;
    padding: 40px 25px;
    margin-bottom: 40px;

    .titre {
        font-size: 24px;
        margin-bottom: 30px;
        color: brown;
        font-weight: 300;
        letter-spacing: 1px;
    }

    .valider {
        display: block;
        position: absolute;
        bottom: 50px;
    }

    .ipt-search {
        padding: 10px;
        border: 1px solid #eeeeee;
    }
`

const LabelContainer = styled("label")`
    display: flex;
    min-height: 25px;
    align-items: center;
    position: relative;
    padding-left: 39px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
    font-family: ${theme.fonts.serif};
    
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    &:hover input ~ .checkmark {
        background-color: #ccc;
    }

    input:checked ~ .checkmark:after {
        display: block;
    }


    /* Show the checkmark when checked */
    input:checked ~ .checkmark:after {
        display: block;
    }


    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
        background-color: ${theme.colors.primary};
    }


`

const CheckMark = styled("span")`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    transition: all linear 0.1s ;

    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`

export { FilterContainer, LabelContainer, CheckMark }