import { createSlice } from "@reduxjs/toolkit";

const elementSlice = createSlice({
    name: "element",
    initialState: {
        elementData: [],
        loading: true,
        error: false,
        credits: {},
    },
    reducers: {
        fetchElement: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchElementSuccess: (state, { payload: elementData }) => {
            state.elementData = elementData;
            state.loading = false;
            state.error = false;
        },
        fetchElementError: (state) => {
            state.loading = false;
            state.error = true;
        },
        resetState: (state) => {
            state.elementData = [];
            state.loading = true;
            state.error = false;
        },

        fetchCredits: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchCreditsSuccess: (state, { payload: credits }) => {
            state.credits = credits;
            state.loading = false;
            state.error = false;
        },
        fetchCreditsError: (state) => {
            state.loading = false;
            state.error = true;
        },
        resetCreditsState: (state) => {
            state.credits = {};
            state.loading = true;
            state.error = false;
        },
    },
});

export const { 
    fetchElement, 
    fetchElementSuccess, 
    fetchElementError, 
    resetState,
    fetchCredits,
    fetchCreditsSuccess,
    fetchCreditsError, 
    resetCreditsState,
} = elementSlice.actions;

export const selectElement = (state) => state.element.elementData;
export const selectError = (state) => state.element.error;
export const selectLoading = (state) => state.element.loading;
export const selectCast = (state) => state.element.credits.cast;

export default elementSlice.reducer;
