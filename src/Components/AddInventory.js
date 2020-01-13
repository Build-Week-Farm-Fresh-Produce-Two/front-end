import React from 'react';
import { addSupply } from '../actions';
import { connect } from 'react-redux';

class AddInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            farmID: "",
            productID: "",
            measurementType: "",
            quantity: "",
            price: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    submitHandler(e) {
        e.preventDefault();
        this.props.addSupply(
            this.state
            )
        console.log(this.state)
    }

    render() { 
        return ( 
            <div>
            <h2>Add Inventory</h2>
            <form onSubmit={this.submitHandler}>
                    <input
                    type="text"
                    placeholder="Farm ID"
                    name="farmID"
                    value={this.state.farmID}
                    onChange={this.handleChange}
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
                    <button type="submit">Add</button>
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

export default connect(mapStateToProps, {addSupply})(AddInventory);