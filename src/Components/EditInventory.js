import React, { useState } from 'react';
import {axiosWithAuth} from '../Utils/axiosWithAuth';


const EditInventory = props => {
const [item,setItem] = useState([]);


    const handleDelete = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`api/supply/${item.id}`)
        .then(response => {
            props.updateItems(response)
            props.history.push('/Inventory');
        })
        .catch(error => console.log(error))
    }
    return (
        
        <button type="button" onClick={handleDelete}>
            Delete
        </button>
    )
}

export default EditInventory;