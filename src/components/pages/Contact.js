import React from "react";
import {  Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { FaPaypal, FaInstagram } from "react-icons/fa";



const useStyles = makeStyles({
    col: {
        background: "#303030",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        color: "white",
    },
    row: {
        background: "#303030",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        color: "white",
    },
    icon: {
        background: "#303030",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        color: "white",
    },
    h2: {
        color: "#c74727",
        fontSize: 40,
    },
    footertext: {
        color: "white",
        fontSize: 10,
    },
});

const Contact = () => {

    const Styles = useStyles();
    
 return (
     <Box id="contact" sx={{ backgroundColor: "#d1411e" }}>
         <Stack className={Styles.row}>
             <Stack className={Styles.col}>
                 <Typography className={Styles.h2}>PIZZA HOUSE</Typography>
                 <Box className={Styles.icon}>
                     <FacebookOutlinedIcon
                         style={{ color: "white", fontSize: "40px" }}
                     ></FacebookOutlinedIcon>
                     <FaPaypal
                         style={{ color: "white", fontSize: "40px" }}
                     ></FaPaypal>
                     <FaInstagram
                         style={{ color: "white", fontSize: "40px" }}
                     ></FaInstagram>
                 </Box>
                 <Typography style={{ fontSize: "15px" }}>
                     Frank’s Pizza House is a family business that has been
                     operated by the Taverniti family since 1992. With classic
                     Italian dishes, we offer our clients a warm atmosphere
                     filled with friendly faces and aromas of freshly made
                     dough, sizzling pizza and savoury espresso.
                 </Typography>
             </Stack>

             <div className="col-md-4 lh-lg d-flex justify-content-center align-items-center flex-column mb-4 mb-md-0">
                 <div className="contact-us d-flex align-items-center flex-column text-center text-md-start">
                     <span className="d-flex mb-md-2 w-100 align-items-center flex-column flex-md-row">
                         <AddLocationAltOutlinedIcon></AddLocationAltOutlinedIcon>
                         <p>Via Teodosio 55, 20131 Milan Italy</p>
                     </span>
                     <span className="d-flex mb-md-2 w-100 align-items-center flex-column flex-md-row">
                         <AccessTimeIcon></AccessTimeIcon>
                         <p>Open At 9:00 AM To 11:00 PM</p>
                     </span>
                     <span className="d-flex w-100 align-items-center flex-column flex-md-row">
                         <CallIcon></CallIcon>
                         <p className="m-0">+123-456-78910 +123-456-78910</p>
                     </span>
                 </div>
             </div>
         </Stack>
     </Box>
 );
}
export default Contact;
