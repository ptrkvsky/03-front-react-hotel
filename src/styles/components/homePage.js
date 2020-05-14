import styled from "@emotion/styled";
import theme from "../theme";
import bannerHome from "../../images/banner_hotel.jpg"

const BannerHome = styled("div")`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index:0;
    background-image: url(${bannerHome});
    min-height: 80vh;
    background-size: cover;
    background-position: center center;

    h1{
        position: absolute;
        top: 170px;
        left: 0px;
        text-shadow: 4px 4px #9b565645;
    }

    .item {
        display: block;
        color: #FFF;
        font-size: 80px;
    }
    .city{
        font-size: 120px;
    }
    .country{
        font-size: 100px;
        display: block;
        margin-top: 30px;
    }
`;

const ContainerHome = styled("section")`
    position: relative;
    z-index: 10;
    padding-top: 530px;
    
`

export { BannerHome, ContainerHome };
