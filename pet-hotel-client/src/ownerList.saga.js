import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: fired on "FETCH_OWNER" actions dispatched from loading register owner page
function* fetchOwnerList() {
  try {
    const owners = yield axios.get('/api/owners'); //TODO - Double Check route
    console.log('get all owners:', owners.data);
    yield put({ type: 'SET_OWNER', payload: owners.data });
  } catch (error) {
    console.log('Owner get request failed', error);
  }
}

function* addOwner() {
    try {
        const newOwner = yield axios.post('/api/owners'); //TODO - Double Check route
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

// function* fetchClient(action) {
//     try {
//       const client = yield axios.get(`/api/info/${action.payload}`); 
//       console.log('get one client:', client.data[0]);
//       yield put({ type: 'SET_CLIENT_INFO', payload: client.data[0] });
      
//     } catch (error) {
//       console.log('Client get request failed', error);
//     }
// }

//yield takeEvery('FETCH_CLIENT', fetchClient)