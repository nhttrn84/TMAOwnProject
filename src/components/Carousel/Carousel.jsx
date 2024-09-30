import { CarouselPic1, CarouselPic2, CarouselPic3 } from "../../assets";

import Carousel from 'react-material-ui-carousel'
import React from "react";

const CarouselComponent = () => {
    return (
        <Carousel
            indicatorContainerProps={{
                style: {
                zIndex: 1,
                marginTop: "-40px",
                position: "relative"
                }
            }}
            sx={{
                height: '100%',  
            }}
        >
            <CarouselPic1 style={{
                borderRadius: '100px 0 0 100px',
                backgroundColor: '#216CE3',
                height: '100vh',
                width: '100%',  
                objectFit: 'cover'
            }} />
            
            <CarouselPic2 style={{
                borderRadius: '100px 0 0 100px',
                backgroundColor: '#216CE3',
                height: '100vh',
                width: '100%',
                objectFit: 'cover'
            }} />
            
            <CarouselPic3 style={{
                borderRadius: '100px 0 0 100px',
                backgroundColor: '#216CE3',
                height: '100vh',
                width: '100%',
                objectFit: 'cover'
            }} />
        </Carousel>
    );
};

export default CarouselComponent;
