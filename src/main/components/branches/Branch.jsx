import { Card, CardContent, CardMedia, Typography, Grid, Button, IconButton, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Branch = ({branch}) => {
  const openLinkInNewTab = (url) => {
    const fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : 'https://' + url;
    window.open(fullUrl, "_blank");
  };
  return (
    <Card sx={{ maxWidth: 400, backgroundColor: '#f7f7f7' }}>
      <CardMedia
        component="img"
        height="180"
        image={branch.imageUrl}
        alt={branch.name}
        onClick={() => openLinkInNewTab(branch.googleMapsLink)}
      />
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="div">
            {branch.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <LocationOnIcon /> {branch.address}
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <AccessTimeIcon />
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

