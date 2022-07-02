import React from "react";
import Slider from "react-slick";
import { Box, Typography} from "@mui/material";

import pizza1 from "../../components/data/images/gallery2.png";



const Hero = () => {
      
  
      const settings = {
          dots:false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 21000,
          autoplaySpeed: 2000,
          cssEase: "linear",
      };
    return (
        <Box sx={{ backgroundColor: "#d1411e" }}>
            <Slider {...settings}>
                <Box className="col-md-4 d-flex justify-content-center align-items-center ">
                    <img
                        src={pizza1}
                        alt="pizza"
                        width="300px"
                        height="300px"
                    />
                    <Typography
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        component="h2"
                        variant="h3"
                        style={{ color: "white" }}
                    >
                        {" "}
                        20% Order{" "}
                    </Typography>{" "}
                    <Typography
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        component="h2"
                        variant="h3"
                        style={{ color: "white" }}
                    >
                        Off Now{" "}
                    </Typography>
                </Box>
                <Box className="col-md-4 d-flex justify-content-center align-items-center ">
                    <img
                        src={pizza1}
                        alt="pizza"
                        width="300px"
                        height="300px"
                    />
                    <Typography
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        component="h2"
                        variant="h3"
                        style={{ color: "white" }}
                    >
                        {" "}
                        20% Order{" "}
                    </Typography>{" "}
                    <Typography
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        component="h2"
                        variant="h3"
                        style={{ color: "white" }}
                    >
                        {" "}
                        Off Now
                    </Typography>
                </Box>
                <Box className="col-md-4 d-flex justify-content-center align-items-center ">
                    <img
                        src={pizza1}
                        alt="pizza"
                        width="300px"
                        height="300px"
                    />
                    <Typography
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        component="h2"
                        variant="h3"
                        style={{ color: "white" }}
                    >
                        {" "}
                        20% Order{" "}
                    </Typography>{" "}
                    <Typography
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        component="h2"
                        variant="h3"
                        style={{ color: "white" }}
                    >
                        {" "}
                        Off Now{" "}
                    </Typography>{" "}
                </Box>
            </Slider>
        </Box>
    );
  }

export default Hero;

