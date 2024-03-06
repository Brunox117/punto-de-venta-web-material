import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Branch } from "./Branch";

export const Branches = () => {
  const { branches } = useSelector((state) => state.firebase);

  const gridItemStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px", // Puedes ajustar el valor según necesites
  };

  return (
    <Grid container spacing={2}>
      {branches.map((branch) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={branch.id} style={gridItemStyle}>
          <Branch branch={branch}/>
        </Grid>
      ))}
    </Grid>
  );
};
