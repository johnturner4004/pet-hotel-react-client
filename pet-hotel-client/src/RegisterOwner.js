import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import axios from 'axios';

function registerOwner() {

    //GETs list of owners to display on DOM on page load
    useEffect(() => {
        dispatch({type: 'FETCH_OWNER_LIST'});
    }, []);

    //ownerList store instance holds a list of all owners
    const ownerList = useSelector((store) => store.ownerList);

    //sets local state for owner object to POST to saga/sever/DB
    const [ownerName, setOwnerName] = useState('');
    const [numberOfPets, setNumberOfPets] = useState('');

    const dispatch = useDispatch();

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
        history.push('/dashboard');
    }//end goBack

    //TODO - Double check routes
    const routeToOwners = () => {
        history.push('/owners');
    }//end goBack

    return(
        <div>
            <div className="header">
                <H2>Pet Hotel</H2>
            </div>
            <div className="nav-bar">
                <button onClick={routeToDashboard}>Dashboard</button>
                <button onClick={routeToOwners}>Manage Owners</button>
            </div>
            <div className="input">
                <H3>Add Owner</H3>
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
                <H3>Owners</H3>
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
                                <td>{item.number-of-pets}</td>
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

export default registerOwner;