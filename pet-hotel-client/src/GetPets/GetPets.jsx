import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function GetPets() {
  const dispatch = useDispatch();

  function getPetList() {
    dispatch({type: 'FETCH_PET'});
  }

  useEffect(() => {
    getPetList();
  });

  const petList = useSelector((store) => store.getPets);

  return ( 
      //
    <>
      <h1>Pet's List</h1>
      {JSON.stringify(petList)}
      {/* <ul>
        {petList.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul> */}
    </>
  );
}

export default GetPets;
