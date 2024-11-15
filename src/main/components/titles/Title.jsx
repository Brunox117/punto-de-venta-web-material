import { Typography, Grid } from "@mui/material";

export const Title = ({title = "", subtitle = ""}) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h3" color="white" style={{textShadow: '1px 3px 2px #f77e0a', fontWeight: 'bold', color: '#f9a826'}}>
        {/* <Typography variant="h4" color="white" style={{textShadow: '2px 3px 2px #f77e0a', fontWeight: 'bold', color: theme.palette.fonts.title}}> */}
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" color="white" style={{textShadow: '2px 3px 2px #bfeb00', fontWeight: 'bold', color: '#a7ce3d' }}>
        {/* <Typography variant="h2" color="white" style={{textShadow: '4px 3px 2px #bfeb00', fontWeight: 'bold', color: theme.palette.fonts.title}}> */}
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  )
}
