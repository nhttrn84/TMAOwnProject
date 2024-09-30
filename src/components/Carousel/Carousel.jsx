import { CarouselPic1, CarouselPic2, CarouselPic3 } from "../../assets";

import { Box } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import React from "react";

const CarouselComponent = () => {
    return (
        <Carousel
            indicatorIconButtonProps={{
                style: {
                    margin: '10px',
                    padding: '20px',
                    color: 'white',       
                    borderRadius: '5px',  
                    width: '30px',        
                    height: '5px',
                }
            }}
            indicatorContainerProps={{
                style: {
                    zIndex: 1,
                    marginTop: "-60px",
                    position: "relative",
                    display: 'flex',
                    justifyContent: 'center',
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: 'gray'              
                }
            }}
            sx={{
                height: '100%',  
            }}
        >
            <Box 
                borderRadius='100px 0 0 100px'
                backgroundColor='#216CE3'
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CarouselPic1 
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '35vw'
                    }}
                />
            </Box>
            <Box 
                borderRadius='100px 0 0 100px'
                backgroundColor='#216CE3'
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CarouselPic2 
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '35vw'
                    }}
                />
            </Box>
            <Box 
                borderRadius='100px 0 0 100px'
                backgroundColor='#216CE3'
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CarouselPic3
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '35vw'
                    }}
                />
            </Box>
        </Carousel>
    );
};

export default CarouselComponent;
