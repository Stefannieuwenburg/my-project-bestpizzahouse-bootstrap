import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";


const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const SaleBanner = () => {
 useStyles();

    return (
        <Box
            display={{ md: "flex" }}
            sx={{ backgroundColor: "#d1411e", color: "#fff" }}
        >
            <Box flexShrink={0}>
                <img
                    src="https://bit.ly/2jYM25F"
                    alt="Woman paying for a purchase"
                    borderRadius="lg"
                    width={{ md: 10 }}
                    height="200px"
                />
            </Box>
            <Box  ml={{ md: 6 }}>
                <Typography
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    Pizza House
                </Typography>

                <Typography  color="gray.500">
                    we love to gif you the best service in the house.<br/>
                    gif us your ideas we can make it for you on the spot.<br/>
                    all customers welkom.
                </Typography>
            </Box>
        </Box>
    );
}
export default SaleBanner;