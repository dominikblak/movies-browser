import { apiConnect } from "../../common/apiConnect";
import { apiLink, apiKey, language } from "../../common/apiConfiguration";
import { fetchMovieList, fetchMovieListSuccess, fetchMovieListError } from "./movieListSlice";
import { call, put, takeLatest, delay } from "redux-saga/effects";

function* fetchMovieListHandler() {
  const path = `${apiLink}movie/popular${apiKey}${language}&page=3`;


    try {
        yield delay(2000);
        const data = yield call(apiConnect, path);
        yield put(fetchMovieListSuccess(data));
    } catch (error) {
        yield put(fetchMovieListError())
    }

}

export function* watchFetchMovieList() {
  yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
}