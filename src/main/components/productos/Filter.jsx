import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Filter = ({ filterProducts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  if (!categories) {
    return null; // O puedes mostrar un mensaje de carga u otra lógica de manejo de carga
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterProducts(event.target.value, "");
  };

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Filtrar por categoría
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory}
          label="Categoría"
          onChange={handleCategoryChange}
        >
          <MenuItem value="">
            <em>TODAS</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
