import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: fired on "FETCH_OWNER" actions dispatched from loading register owner page
function* fetchOwnerList() {
  try {
    const owners = yield axios.get('/api/owners'); 
    console.log('get all owners:', owners.data);
    yield put({ type: 'SET_OWNER', payload: owners.data });
  } catch (error) {
    console.log('Owner get request failed', error);
  }
}

function* addOwner() {
    try {
        const newOwner = yield axios.post('/api/owners'); 
        console.log('post new owner info:', newOwner.data);
        yield put({ type: 'MAKE_OWNER', payload: newOwner.data}); 
    } catch (error) {
        console.log('Owner post request failed', error);
    }
}

function* ownerListSaga() {
  yield takeEvery('FETCH_OWNER_LIST', fetchOwnerList);
  yield takeEvery('ADD_OWNER', addOwner);
}

export default ownerListSaga;