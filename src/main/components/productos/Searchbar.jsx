import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    padding: theme.spacing(2),
  },
}));

export const Searchbar = ({searchProducts}) => {
  const classes = useStyles();
  return (
    <div className="classes.root" variant="body1">
      <SearchBar
        placeholder="Buscar por nombre"
        onChange={(newValue) => {
          searchProducts(newValue);
        }}
      />
    </div>
  );
};
