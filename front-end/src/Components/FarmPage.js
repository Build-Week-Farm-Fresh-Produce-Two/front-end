//CHANGE THIS PAGE TO BE THE FARM DASHBOARD


import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const FarmPage = () => {
    //fetch farm data from server when the component mounts
    //set data to the farmlist state property

    const [farmList, setFarmList] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("https://bestfarm.herokuapp.com/farms")
            .then(res => {
                setFarmList(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            
        </>
    )
}

export default FarmPage;