import { configureStore } from "@reduxjs/toolkit";
import MovieListSliceReducer from "./features/MovieList/MovieListSlice";

export default configureStore({
    reducer: {
        movies: MovieListSliceReducer,
    },
})