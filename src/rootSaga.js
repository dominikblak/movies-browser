import { all } from "@redux-saga/core/effects";
import { movieListSaga } from "./features/MovieList/MovieListSaga";


export default function* rootSaga() {
    yield all([
        movieListSaga(),
    ])
};