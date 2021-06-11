import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TableCell, 
  Table, 
  TableBody
} from '@material-ui/core';

function GetPets() {
  const dispatch = useDispatch();

  function getPetList() {
    dispatch({type: 'FETCH_PET'});
  }

  useEffect(() => {
    getPetList();
  }, []);

  const petList = useSelector((store) => store.getPets);

  return ( 
      //
    <>
      <h1>Pet's List</h1>
      {/* <ul>
        {petList.map(pet => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul> */}
      <Paper>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Owner</TableCell>
                <TableCell>Pet</TableCell>
                <TableCell>Breed</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Checked In</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {petList ? petList.map(pet => {
                return(
                <TableRow key={pet.id}>
                  <TableCell>{pet.name}</TableCell>
                  <TableCell>{pet.pet}</TableCell>
                  <TableCell>{pet.breed}</TableCell>
                  <TableCell>{pet.color}</TableCell>
                  <TableCell>check-in</TableCell>
                  <TableCell>buttons</TableCell>
                </TableRow>
              )}):''}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default GetPets;
