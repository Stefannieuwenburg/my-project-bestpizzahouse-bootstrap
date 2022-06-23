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
            mt={4}
            mb={4}
            p={2}
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
            <Box mt={{ base: 2, md: 0 }} ml={{ md: 6 }}>
                <Typography
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    Marketing
                </Typography>

                <Typography mt={2} color="gray.500">
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                </Typography>
            </Box>
        </Box>
    );
}
export default SaleBanner;