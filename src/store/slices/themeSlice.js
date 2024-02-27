import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleMode: (state, /* action */ ) => {
            state.darkMode = !state.darkMode;
        },
    }
});


// Action creators are generated for each case reducer function
export const { toggleMode } = themeSlice.actions;