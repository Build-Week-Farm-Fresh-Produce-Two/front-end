import React from "react";
import { fetchSupplys, editSupply } from '../actions';
import { connect } from 'react-redux';


class Inventory extends React.Component {
    componentDidMount() {
        this.props.fetchSupplys();
        this.props.editSupply();
        }
    

    render() { 
        return ( 
            <div>
                {this.props.supply.map(inventory => {
                    return (
                        <div className="inventory-card">
                            <div className="produce-img">
                            <img width="50%" src={inventory.imageURL} alt="farm produce"/>
                            </div>
                            <h1>Name: {inventory.name}</h1>
                            <p>Description: {inventory.description}</p>
                            <p>Weight: {inventory.measurementType}</p>
                            <p>Quantity: {inventory.quantity}</p>
                            <p>Price: ${inventory.price}</p>
                            <button onClick={editSupply(inventory)}>Edit</button>
                        </div>
                    )
                },[])
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        supply: state.supply
    }
}

export default connect(mapStateToProps, {fetchSupplys, editSupply})(Inventory);