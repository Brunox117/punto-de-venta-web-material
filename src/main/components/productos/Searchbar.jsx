import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    padding: theme.spacing(2),
  },
}));

export const Searchbar = ({ searchProducts }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (newValue) => {
    setSearchValue(newValue);
    searchProducts("", newValue);
  };

  return (
    <div className={classes.root} variant="body1">
      <SearchBar
        onCancelSearch={() => handleSearchChange("")}
        placeholder="Buscar por nombre"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};
