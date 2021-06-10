import { all } from 'redux-saga/effects';
import fetchPetSaga from './getPet.saga';

export default function* rootSaga() {
  yield all([
    fetchPetSaga(),
  ]);
}
