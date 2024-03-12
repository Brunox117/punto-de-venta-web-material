import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Clear } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export const SearchbarWithFilter = ({
  searchProducts,
  categories,
  // initialCategory = "",
}) => {
  const theme = useTheme();

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // useEffect(() => {
  //   setSelectedCategory('TODAS');
  // }, [initialCategory]);

  const handleSearchChange = (newValue) => {
    setSearchValue(newValue);
    searchProducts(newValue, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    searchProducts(searchValue, category);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    searchProducts("", selectedCategory);
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <TextField
          sx={{
            backgroundColor: theme.palette.searchbarAndFilter.searchbar,
            borderRadius: 1,
          }}
          variant="outlined"
          placeholder="Buscar por nombre"
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {searchValue && (
                  <IconButton onClick={handleClearSearch}>
                    <Clear />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item>
        <FormControl
          variant="outlined"
          sx={{
            backgroundColor: theme.palette.searchbarAndFilter.filter,
            marginLeft: 1,
          }}
        >
          <InputLabel id="category-label" sx={{ minWidth: 200 }}>
            Filtrar por categoría
          </InputLabel>
          <Select
            sx={{ minWidth: 200, color: "#727272" }}
            labelId="category-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Categoría"
          >
            <MenuItem value="">TODAS</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
