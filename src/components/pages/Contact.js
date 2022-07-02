import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { FaPaypal, FaInstagram } from "react-icons/fa";import styled from "styled-components";
import { Stack, Box, Typography } from "@mui/material";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import Portal from "@mui/material/Portal";


const Contact = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    
    const styles = {
    position: "fixed",
    width: 200,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid",
    borderRadius: "50px",
    p: 1,
    bgcolor: "background.paper",
};

    const Btn = styled.button`
    border-radius: 50px;
    background-color: #ff471a;
    font-size: 14px;
    color: black;
    &:hover {
        color: white;
    }
`;

    return (
        <Box id="contact" style={{ background: "#000" }}>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack
                        gutterBottom
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        mt={2}
                        mb={2}
                    >
                        <Typography
                            style={{ color: "white" }}
                            gutterBottom
                            variant="body1"
                        >
                            {" "}
                            Frank’s Pizza House is a family business that has
                            been operated by the Taverniti family since 1992.
                        </Typography>
                        <Typography
                            style={{ color: "white" }}
                            gutterBottom
                            variant="body2"
                        >
                            {" "}
                            With classic Italian dishes, we offer our clients a
                            warm atmosphere filled with friendly faces <br />{" "}
                            and aromas of freshly made dough, sizzling pizza and
                            savoury espresso.
                        </Typography>

                        <Stack
                            mt={1}
                            mb={1}
                            direction="row"
                            justifyContent="center"
                        >
                            {" "}
                            <FacebookOutlinedIcon
                                style={{ color: "white", fontSize: "40px" }}
                            />
                            <FaPaypal
                                style={{ color: "white", fontSize: "40px" }}
                            />
                            <FaInstagram
                                style={{ color: "white", fontSize: "40px" }}
                            />
                        </Stack>
                    </Stack>{" "}
                </Stack>

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <AddLocationAltOutlinedIcon
                        style={{ fontSize: "32px", color: "white" }}
                    />
                    <Typography style={{ fontSize: "15px", color: "white" }}>
                        Via Teodosio 55, 20131 Milan Italy
                    </Typography>
                    <AccessTimeIcon
                        style={{ fontSize: "32px", color: "white" }}
                    />
                    <Typography style={{ fontSize: "15px", color: "white" }}>
                        {" "}
                        open At 9:00 AM To 11:00 PM
                    </Typography>
                    <CallIcon style={{ fontSize: "32px", color: "white" }} />
                    <Typography style={{ fontSize: "15px", color: "white" }}>
                        +123-456-78910 +123-456-78910
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                mt={4}
                mb={4}
            >
                <Typography>
                    <a href="https://github.com/Stefannieuwenburg">
                        <AiOutlineGithub
                            style={{ color: "green", fontSize: "30px" }}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/stefan-nieuwenburg-3030a1213/">
                        <IoLogoLinkedin
                            style={{ color: "blue", fontSize: "30px" }}
                        />
                    </a>
                </Typography>
                <Typography style={{ fontSize: "15px", color: "white" }}>
                    © Copyright 2022 | Ontwikkeling door Stefan Nieuwenburg
                    Services | Alle rechten voorbehouden.
                </Typography>

                <Box>
                    <Btn onClick={handleClick}>callme!!</Btn>

                    {open ? (
                        <Portal>
                            <Box sx={styles}>Call me for work: 0626142085</Box>
                        </Portal>
                    ) : null}
                </Box>
            </Stack>
        </Box>
    );
}
export default Contact;
