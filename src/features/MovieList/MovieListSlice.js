import { createSlice } from "@reduxjs/toolkit";

const MovieListSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: 'whatever',
    },
    reducers: {

    },
})

export const selectMovies = state => state.movies;
export default MovieListSlice.reducer;