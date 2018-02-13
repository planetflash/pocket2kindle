import { all } from 'redux-saga/effects';

import pocketSagas from '../domains/pocket/sagas';

export default function* rootSaga() {
  yield all([
    ...pocketSagas,
  ])
}
