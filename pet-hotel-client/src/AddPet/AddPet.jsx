//react imports
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import from material UI
import { Button, MenuItem, TextField } from '@material-ui/core';

const AddPet = () => {
    const dispatch = useDispatch();
    const owners = useSelector(store => store.ownerListReducer);

    const [petName, setPetName] = useState('');
    const [petColor, setPetColor] = useState('');
    const [breed, setBreed] = useState('');
    const [owner, setOwner] = useState('Owner Name');
    
    const submitForm = (event) => {
        event.preventDefault();
        dispatch({type: 'POST_PET', payload: {pet_name: petName, pet_color: petColor, 
                    breed: breed, owner: owner}});
        setPetName('');
        setPetColor('');
        setBreed('');
        setOwner('Owner Name');
    }

    const handleChange = (event) => {
        setOwner(event.target.value);
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_OWNER_LIST' })
    }, []);

    return(
        <div>
            <form className="form" onSubmit={submitForm}>
                <div>
                    <TextField id="outlined basic" label="Pet Name" variant="outlined"
                        onChange={(event) => setPetName(event.target.value)} value={petName}>
                    </TextField>
                </div>
                <div>
                    <TextField id="outlined basic" label="Pet Color" variant="outlined"
                        onChange={(event) => setPetColor(event.target.value)} value={petColor}>
                    </TextField>
                </div>
                <div>
                    <TextField id="outlined basic" label="Breed" variant="outlined"
                        onChange={(event) => setBreed(event.target.value)} value={breed}>
                    </TextField>
                </div>
                <div>
                    <TextField id="outlined-select" select label="Owner"
                        value={owner} onChange={handleChange} variant="outlined">
                          {owners.map((option) => (
                              <MenuItem key={option.id} value={option.id}>
                                  {option.type}
                              </MenuItem>
                          ))}  
                    </TextField>
                </div>
                <Button size="small" color="primary" variant="contained" type="submit">
                    Add Pet
                </Button>
            </form>
        </div>
    )
}

export default AddPet;