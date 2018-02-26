import { all } from "redux-saga/effects";

import pocketSagas from "containers/pocket/sagas";

export default function* rootSaga() {
  yield all([...pocketSagas]);
}
