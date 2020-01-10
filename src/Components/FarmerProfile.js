
import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

import FarmItems from './FarmItems';


const FarmerProfile= () => {
    const [supplyList, setSupplyList] = useState('');

    useEffect(() => {
        axiosWithAuth()
            .get("api/supply/")
            .then(response => {
                console.log(response)
                setSupplyList(response);
            })
            .catch(error => console.log('error: ', error));
        }, []);

    return (
        <div>
            {(()=>{
                if (supplyList){
                    return <FarmItems supplys={supplyList} updateSupply={setSupplyList}/>
                }
            })()}
            {/* {supplyList && return <SupplyList supplys={supplyList} updateSupply={setSupplyList}/>} */}
        </div>
    )
}

export default FarmerProfile;