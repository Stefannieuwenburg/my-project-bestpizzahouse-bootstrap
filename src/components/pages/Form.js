import React from "react";
import styled from "styled-components";
import { Stack, Paper, Input } from "@mui/material";

const FormBtn = styled.button`
    padding: 4px;
    background-color: #ff471a;
    font-size: 16px;
    border-radius: 20px;
    color: black;
    &:hover {
        color: white;
    }
`;

const Form = () => {
    return (
        <Stack sx={{ backgroundColor: "#d1411e" }}>
            <Paper>
                <Stack className={Styles.col} spacing={1}>
                    <Input
                        fullWidth
                        placeholder="First Name"
                        style={{ color: "white" }}
                    />
                    <Input
                        type="email"
                        placeholder="Email Address"
                        style={{ color: "white" }}
                    />
                    <Input
                        className="w-100 pt-4"
                        placeholder="Messages"
                        style={{ color: "white" }}
                    />
                </Stack>
            </Paper>
            <FormBtn>Send</FormBtn>
        </Stack>
    );
};
export default Form;