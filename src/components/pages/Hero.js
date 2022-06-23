import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography} from "@mui/material";

import pizza1 from "../../components/data/images/gallery2.png";

const useStyles = makeStyles({
    txt: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        
    },
});

const Hero = () => {
      const style = useStyles();
  
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
                <Box
                    className="col-md-3 d-flex justify-content-center align-items-center "
                    
                >
                    <img
                        src={pizza1}
                        alt="pizza"
                        width="200px"
                        height="200px"
                    />
                    <Typography className={style.txt}>
                        speed delivery service{" "}
                    </Typography>
                </Box>
                <Box className="col-md-3 d-flex justify-content-center align-items-center ">
                    <img
                        src={pizza1}
                        alt="pizza"
                        width="200px"
                        height="200px"
                    />
                    <Typography className={style.txt}>
                        speed delivery service{" "}
                    </Typography>
                </Box>
                <Box className="col-md-3 d-flex justify-content-center align-items-center ">
                    <img
                        src={pizza1}
                        alt="pizza"
                        width="200px"
                        height="200px"
                    />
                    <Typography className={style.txt}>
                        speed delivery service{" "}
                    </Typography>
                </Box>
            </Slider>
        </Box>
    );
  }

export default Hero;

