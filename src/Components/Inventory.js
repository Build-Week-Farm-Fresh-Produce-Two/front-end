import React from "react";
import { fetchSupplys } from '../actions';
import { connect } from 'react-redux';




class Inventory extends React.Component {
    componentDidMount() {
        this.props.fetchSupplys()
        }
    
    render() { 
        console.log('Inventory component supply render: ', this.props.supply)
        if (this.props.supply.length > 0) {
            return ( 
            <div>
                {this.props.supply.map(inventory => {

                    return (
                        <div className="inventory-card">
                            <div className="produce-img">
                            <img width="50%" src={inventory.imageURL} alt="farm produce"/>
                            </div>
                            <h1>Name: {inventory.name}</h1>
                            <p>Id: {inventory.id}</p>
                            <p>Description: {inventory.description}</p>
                            <p>Weight: {inventory.measurementType}</p>
                            <p>Quantity: {inventory.quantity}</p>
                            <p>Price: ${inventory.price}</p>
                            <p>Product id: {inventory.productID}</p>
                        </div>
                        )
                    },[]) 
                }
            </div>
        );
        }
        else {return (<h1>Loading Supply...</h1>)}
        
    }
}

const mapStateToProps = state => {
    return {
        supply: state.supply
    }
}

export default connect(mapStateToProps, {fetchSupplys})(Inventory);