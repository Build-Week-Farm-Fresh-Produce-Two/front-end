import React, {useEffect, useState} from 'react';
import Inventory from './Inventory';
import UpdateInventory from './AddInventory';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import DeleteInventory from './DeleteInventory';

const FarmerProfile = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get('api/supply/')
        .then(response => setItems(response))
        .catch(error => console.log('error: ', error.response.message));
    }, []);

    return ( 
        <div>
            <h1>Your Farm Produce</h1>
            <div>
                <UpdateInventory items={items} updateItems={setItems}/>
                <DeleteInventory />
            </div>
            <Inventory />
        </div>
    )
}

export default FarmerProfile;


