import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import axios from 'axios';



function RegisterOwner() {

    const dispatch = useDispatch();

    //GETs list of owners to display on DOM on page load
    useEffect(() => {
        dispatch({type: 'FETCH_OWNER_LIST'});
    }, [dispatch]);

    //ownerList store instance holds a list of all owners
    const ownerList = useSelector((store) => store.ownerList);

    //sets local state for owner object to POST to saga/sever/DB
    const [ownerName, setOwnerName] = useState('');
    const [numberOfPets, setNumberOfPets] = useState('');

    //creates new owner object and dispatches that payload to ownerList saga
    const addNewOwner = () => {
        
        const newOwner = {
            name: ownerName,
            numberOfPets: numberOfPets,
        }

        //dispatching new owner object to ownerList saga/reducer 
        dispatch({type: 'ADD_OWNER', payload: newOwner})

        setOwnerName('');
        setNumberOfPets('');

        //should I dispatch 'FETCH_OWNER_LIST' here to refresh table when a new owner is added?

    }

    const history = useHistory();

    //TODO - Double check routes
    const routeToDashboard = () => {
        history.push('/pet-list');
    }//end goBack

    //TODO - Double check routes
    const routeToOwners = () => {
        history.push('/owners');
    }//end goBack

    const deleteOwner = () => {

    }

    return(
        <div>
            <div className="header">
                <h2>Pet Hotel</h2>
            </div>
            <div className="nav-bar">
                <button onClick={routeToDashboard}>Dashboard</button>
                <button onClick={routeToOwners}>Manage Owners</button>
            </div>
            <div className="input">
                <h3>Add Owner</h3>
                <br/>
                <form className="input-form" onSubmit={addNewOwner}>
                    <input className="owner-name" 
                        type="text"
                        value={ownerName}
                        onChange={(event) => setOwnerName(event.target.value)} 
                    />
                    <input className="number-of-pets" 
                        type="text"
                        value={numberOfPets}
                        onChange={(event) => setNumberOfPets(event.target.value)} 
                    />
                    <input className="submit-btn" type="submit" name="submit" value="Submit" />
                </form>
            </div>
            <div className="owner-table">
                <h3>Owners</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Pets</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ownerList.map((item, i) =>
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.numberOfPets}</td>
                                <td><button className="delete-btn" onClick={() => deleteOwner(item.id)}>Delete</button></td>
                                <td colspan="3"></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RegisterOwner;