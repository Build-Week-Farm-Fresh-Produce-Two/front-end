import React, {useEffect, useState} from 'react';
import Inventory from './Inventory';
import AddInventory from './AddInventory';
import DeleteInventory from './DeleteInventory';
import UpdateInventory from './UpdateInventory';

import {axiosWithAuth} from '../Utils/axiosWithAuth';

const FarmerProfile = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get('api/supply')
        .then(response => setItems(response))
        .catch(error => console.log('error: ', error.response.message));
    }, []);

    return ( 
        <div>
            <h1>Your Farm Produce</h1>
            <div>
                <AddInventory />
                <UpdateInventory />
                <DeleteInventory />
            </div>
            <Inventory />
        </div>
    )
}

export default FarmerProfile;


