import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPet (){
    console.log('fetching pets by id');
    try {
        const pet = yield axios.get('http://localhost:5000/api/pets')
        console.log(pet);
        
        yield put({ type: 'SET_PET', payload: pet.data})
    } catch (error){
        console.log('ERROR WITH PET ', error);
        
    }
}

function* fetchPetSaga(){
    yield takeLatest('FETCH_PET', fetchPet);
}

export default fetchPetSaga;