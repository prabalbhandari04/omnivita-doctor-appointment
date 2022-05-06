import { createSlice } from "@reduxjs/toolkit";
import { blueGrey, grey, teal, red } from '@mui/material/colors';

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        current: "Light",
        white: grey[50],
        shade: grey[100],
        background: grey[200],
        primary: teal.A400,
        text: blueGrey[800],
        secondary: teal.A100,
        warning: red[800],
        disabled: grey.A700,
    },
    reducers: {
        change: (state) => {
            state.current = "Dark";
            state.white = grey[900];
            state.shade = blueGrey[900];
            state.background = blueGrey[800];
            state.primary = teal.A700;
            state.text = grey[100];
            state.secondary = teal.A100;
            state.warning = red[400];
            state.disabled = grey.A400;
        },
        revert: (state) => {
            state.current = "Light";
            state.white = grey[50];
            state.shade = grey[100];
            state.background = grey[200];
            state.primary = teal.A400;
            state.text = blueGrey[800];
            state.secondary = teal.A100;
            state.warning = red[700];
            state.disabled = grey.A700;
        }
    }
})

export const { change, revert } = themeSlice.actions;
export default themeSlice.reducer;