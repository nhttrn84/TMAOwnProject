import React from "react";
import Carousel from 'react-material-ui-carousel'
import { CarouselPic1, CarouselPic2, CarouselPic3 } from "../../assets";

const CarouselComponent = () => {
    return (
        <Carousel>
            <CarouselPic1/>
            <CarouselPic2/>
            <CarouselPic3/>
        </Carousel>
    );
};

export default CarouselComponent;
