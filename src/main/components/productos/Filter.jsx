import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 230,
    minHeight: 50,
    marginBottom: 20,
  },
}));

export const Filter = ({ filterProducts }) => {
  const classes = useStyles();
  const { categories } = useSelector((state) => state.firebase);
  const [selectedCategory, setSelectedCategory] = useState("");

  if (!categories) {
    return null; // O puedes mostrar un mensaje de carga u otra lógica de manejo de carga
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterProducts(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Filtrar por categoría
        </InputLabel>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <MenuItem value={""}>
            <em>TODOS</em>
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
