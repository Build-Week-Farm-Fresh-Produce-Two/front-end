//FARMER LOG IN AND ADD AVAILABLE OPTIONS FOR PURCHASE FROM FARM
//EDIT AND DELETE ITEMS FROM INVENTORY
//SEE ORDERS TO PREPARE FOR PICKUP

import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

import SupplyList from './FarmItems';


const FarmerProfile= () => {
    const [supplyList, setSupplyList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("api/supply/")
            .then(response => {
                setSupplyList(response.data);
            })
            .catch(error => console.log('error: ', error.response.data.message));
        }, []);

    return (
        <div>
        <SupplyList supplys={supplyList} updateSupply={setSupplyList} />
        </div>
    )
}

export default FarmerProfile;