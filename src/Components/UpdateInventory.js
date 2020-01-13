import React from 'react';
import {updateSupply} from '../actions';
import { connect } from 'react-redux';



class UpdateInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            farmID: "",
            productID: "",
            measurementType: "",
            quantity: "",
            price: "",
            supplyID: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({...this.state, [e.target.name]: e.target.value})
        // console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateSupply(
            this.state
            )
        console.log(this.state)
    }

    render() { 
        return ( 
            <div>
                <h2>Update Inventory Items</h2>
                <form onSubmit={this.handleSubmit}>

                    <input 
                        type="text"
                        placeholder="Farm ID"
                        name="farmID"
                        onChange={this.handleChange}
                        value={this.state.farmID}
                    />
                    <input
                        type="text"
                        placeholder="Product ID"
                        name="productID"
                        value={this.state.productID}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Weight"
                        name="measurementType"
                        value={this.state.measurementType}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Quantity"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Price"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Supply ID"
                        name="supplyID"
                        value={this.state.supplyID}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Update</button>
                </form>
            </div> 
        );
    }
}

const mapStateToProps = state => {
    return {
        supply: state.supply,
    }
}

export default connect(mapStateToProps, {updateSupply})(UpdateInventory);