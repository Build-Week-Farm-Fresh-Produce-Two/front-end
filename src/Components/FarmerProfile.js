
import React from 'react';
import Inventory from './Inventory';


class FarmerProfile extends React.Component {

    render() { 
        return ( 
            <div>
                <h1>Your Farm Produce</h1>
                <Inventory key="item"/>
            </div>
            );
    }
}

export default FarmerProfile;


