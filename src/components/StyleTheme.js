import { createTheme } from "@mui/material/styles";

const Colors = {
    primary: "#0c0d0d",
    secondary: "#95defb",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
};

const StyleTheme = createTheme({
    palette: {
        primary: {
            main: "#c74727",
            contrastText: Colors.black,
        },
        secondary: {
            main: "#303030",
            contrastText: Colors.white,
        },
        error: {
            main: "#ff471a",
            contrastText: "#FFF",
        },
        warning: {
            main: "#ff9800",
            contrastText: "#FFF",
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },
    },
});

export default StyleTheme;
