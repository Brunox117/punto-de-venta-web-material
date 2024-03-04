import { Grid } from "@mui/material";
import "./Promo.css";

export const Promo = ({ promo }) => {
  const { imageUrl1, imageUrl2, imageUrlG, align } = promo;

  return (
    <Grid
      spacing={2}
      container
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      {align !== 1 ? (
        <>
          <Grid item xs={12} md={12}>
            <img src={imageUrlG} alt="Imagen 3" className="img-bg" />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <img src={imageUrl1} alt="Imagen 1" className="img-md" />
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={imageUrl2} alt="Imagen 2" className="img-md" />
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={6}>
                <img src={imageUrl1} alt="Imagen 1" className="img-md" />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <img src={imageUrl2} alt="Imagen 2" className="img-md" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <img src={imageUrlG} alt="Imagen 3" className="img-bg" />
          </Grid>
        </>
      )}
    </Grid>
  );
};
