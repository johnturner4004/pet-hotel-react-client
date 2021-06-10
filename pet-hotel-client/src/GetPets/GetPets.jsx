import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function PetList(){
    const dispatch = useDispatch();
    
useEffect(() => {
    dispatch({ type: 'FETCH_PET' });
}, [])

const petList = useSelector(store => store.getPets)

    return(
        <>
<h1>Pet's List</h1>
        <ul>
            {petList.map(pet => 
                <li key={pet.id}>{pet.name}</li>)}
        </ul>
        </>
    )


}