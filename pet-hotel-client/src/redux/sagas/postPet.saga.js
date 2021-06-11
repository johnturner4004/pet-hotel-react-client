import { put, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';

function* postPet (action) {
    try{
        yield axios.post('/api/pets', action.payload);
        yield put({type: 'FETCH_PET'})
    }
    catch(error){
        console.log(`Error adding new pet`, error);
    }
};

function* postPetSaga() {
    yield takeLatest('ADD_PET', postPet)
}

export default postPetSaga;