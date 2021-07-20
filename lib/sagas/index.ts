/**
 * @abstract This script watches for a
 */
import { all, call } from "redux-saga/effects";
import userSagas from "lib/sagas/Users";
import tagSagas from "lib/sagas/Tags";
import { SagaIterator } from "lib/types";

function* rootSaga(): SagaIterator {
  yield all([call(userSagas), call(tagSagas)]);
}

export default rootSaga;
