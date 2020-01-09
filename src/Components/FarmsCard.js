//THIS PAGE DISPLAYS THE FARM INFORMATION

import React from "react";

const Farms = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Location: </p>
            <p>Ratings: </p>
            <p>Produce: </p>
        </div>
    )
}

export default Farms;