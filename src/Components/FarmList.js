//THIS PAGE SHOWS FARMS IN LOCAL AREA WITH FARM INFORMATION

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Farms from './FarmsCard';

const FarmList = () => {
const [list, setList] = useState([]);

useEffect(() => {
    axios.get("/farms")
    .then(res => {
        setList(res.data);
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })
}, [])

    return (
        <div>
            {list.map(i => (
                <Farms key={i.id} name={i.name} produce={i.produce}/>
            ))}
        </div>
    )
}

export default FarmList;