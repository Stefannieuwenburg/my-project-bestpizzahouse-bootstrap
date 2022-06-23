import React from 'react'
import styled from "styled-components";
import { Stack, Box, Typography } from "@mui/material";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import Portal from "@mui/material/Portal";

const Footer = () => {
 
const [open, setOpen] = React.useState(false);

const handleClick = () => {
setOpen((prev) => !prev);
};

  const styles = {
    position: 'fixed',
    width: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid',
    borderRadius: '50px',
    p: 1,
    bgcolor: 'background.paper',
    };

    const Btn = styled.button`
        background-color: #ff471a;
        font-size: 14px;
        color: black;
        &:hover {
            color: white;
        }
    `;

    return (
        <>
            <Box sx={{ backgroundColor: "#d1411e", color: "#fff" }} >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
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
                    <Typography style={{ fontSize: "15px" }}>
                        © Copyright 2022 | Ontwikkeling door Stefan Nieuwenburg
                        Services | Alle rechten voorbehouden.
                    </Typography>

                    <Box>
                        <Btn onClick={handleClick}>callme</Btn>

                        {open ? (
                            <Portal>
                                <Box sx={styles}>
                                    Call me for work: 0626142085
                                </Box>
                            </Portal>
                        ) : null}
                    </Box>
                </Stack>
            </Box>
        </>
    );
}




export default Footer;
