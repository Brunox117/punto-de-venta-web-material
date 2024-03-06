import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../../../styles.css";
import { useTheme } from "@emotion/react";

export const Branch = ({ branch }) => {
  const theme = useTheme();
  const openLinkInNewTab = (url) => {
    const fullUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : "https://" + url;
    window.open(fullUrl, "_blank");
  };
  return (
    <Card sx={{ maxWidth: 400 }} className="card-category">
      <CardMedia
        component="img"
        height="180"
        image={branch.imageUrl}
        alt={branch.name}
        onClick={() => openLinkInNewTab(branch.googleMapsLink)}
      />
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: theme.palette.fonts.category }}
          >
            {branch.name}
          </Typography>
          <Typography variant="body2" sx={{color: theme.palette.fonts.category}}>
            <LocationOnIcon sx={{ color: "#f77e0a" }} />
            <br />
            {branch.address}
            <br />
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{color: theme.palette.fonts.category}}>
              <AccessTimeIcon sx={{ color: "#f77e0a" }} />
              <br />
              {branch.schedule}
              <br />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                backgroundColor: "#ffffff",
                color: "#f77e0a", // Color del texto sin seleccionar
                borderColor: "#f77e0a",
                "&:hover": {
                  backgroundColor: "##f77e0a",
                  color: "#ffffff", // Color del texto en hover
                  borderColor: "##f77e0a",
                },
              }}
              startIcon={<WhatsAppIcon />}
              onClick={() => openLinkInNewTab(branch.number)}
              target="_blank"
            >
              {branch.number}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
