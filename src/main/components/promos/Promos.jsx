import { useSelector } from "react-redux";
import { Promo } from "./Promo";
import { Grid } from "@mui/material";

export const Promos = () => {
  const { promos } = useSelector((state) => state.firebase);
  return (
    <Grid container sx={{ paddingTop: '80px' }} justifyContent='center'>
      {promos.map((promo) => (
        <Promo
          key={promo.id}
          promo={promo}
        />
      ))}
    </Grid>
  );
};
