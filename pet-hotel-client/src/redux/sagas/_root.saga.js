import { all } from 'redux-saga/effects';
import fetchPetSaga from './getPet.saga';
import ownerListSaga from './ownerList.saga'

export default function* rootSaga() {
  yield all([
    fetchPetSaga(),
    ownerListSaga(),
  ]);
}
