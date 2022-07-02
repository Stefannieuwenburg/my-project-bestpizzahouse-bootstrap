import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";


  const styles = {
     
      border: "2px solid",
      borderRadius: "130px",
     
  };




const tiers = [
    {
        title: "Free",
        price: "0",
        description: [
            "free drink",
            "by ondering above 15 euro",
           
        ],
    },
    {
        title: "Most Bought",
        price: "15",
        description: [
            "Home pizza",
            "combi deal whit drink",
           
        ],
    },
    {
        title: "Best Deal",
        price: "30",
        description: [
            "4 pizza",
            "one price",
           
        ],
    },
];


const PricingContent = () => {
    return (
        <Box   sx={{ backgroundColor: "#d1411e" }}>
            <GlobalStyles
                styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
            />
            <CssBaseline />

            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === "Best Deal" ? 12 : 6}
                            md={4}
                        >
                            <Card sx={styles}>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: "center" }}
                                    action={
                                        tier.title === "Pro" ? (
                                            <StarIcon />
                                        ) : null
                                    }
                                    subheaderTypographyProps={{
                                        align: "center",
                                    }}
                                    sx={{
                                        backgroundColor: "yellow",
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "baseline",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="text.primary"
                                        >
                                            Euro:{tier.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                        ></Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

const Pricing = () => {
    return <PricingContent />;
}
export default Pricing;