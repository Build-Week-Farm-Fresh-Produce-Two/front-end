//CHANGE THIS PAGE TO BE THE FARM DASHBOARD
import React from "react";
import FarmList from "./FarmList";

const FarmPage = () => {
    //fetch farm data from server when the component mounts
    //set data to the farmlist state property

    return (
        <div>
            <h1>Choose a farm</h1>
            <FarmList />

        </div>
    )
}

export default FarmPage;