import { apiConnect } from "../common/apiConnect";
import { apiLink, apiKey, language } from "../common/apiConfiguration";
import { fetchElement, fetchElementSuccess, fetchElementError, fetchCreditsSuccess, fetchCreditsError, fetchCredits } from "./elementSlice";
import { call, put, takeLatest, delay } from "redux-saga/effects";

function* fetchElementHandler({ payload: { id } }) {

    const movieElement = `${apiLink}movie/${id}${apiKey}${language}`;

    try {
        yield delay(1000);
        const data = yield call(apiConnect, movieElement);

        yield put(fetchElementSuccess(data));
    } catch (error) {
        yield put(fetchElementError());
    }
}

function* fetchCreditsHandler({ payload: { id } }) {
    const movieCredits = `${apiLink}movie/${id}/credits${apiKey}${language}`;

    try {
        yield delay(1000);
        const credits = yield call(apiConnect, movieCredits);

        yield put(fetchCreditsSuccess(credits));
    } catch (error) {
        yield put(fetchCreditsError());
    }
}

export function* watchFetchElement() {
    yield takeLatest(fetchElement.type, fetchElementHandler);
    yield takeLatest(fetchCredits.type, fetchCreditsHandler);
}
