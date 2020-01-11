import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

const initialItem = {
    farmID: "",
    productID: "",
    measurementType: "",
    quantity: "",
    price: ""
}

const AddInventory = props => {
    const [item, setItem] = useState(initialItem);

    // useEffect(() => {
    //     const itemToEdit = props.items.find(
    //         e => `${item.id}` === props.match.params.id
    //     );
    //     console.log(props.items, itemToEdit);
    //     if (itemToEdit) {
    //         setItem(itemToEdit);
    //     }
    // }, [props.items, props.match.params.id]);

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'price') {
            value = parseInt(value, 10);
        }
        setItem({
            ...item,
            [e.target.name]: value
        });
    };

    
    const handleSubmit = ev => {
        ev.preventDefault();
        axiosWithAuth()
        .post(`api/supply/${item.id}`)
        .then(response => {
            props.updateItems(response.data);
            props.history.push(`api/supply/${item.id}`);
        })
        .catch(error => console.log('error: ', error.response.message))
    }

    return (
        <div>
            <h2>Add Inventory</h2>
            <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Farm ID"
                    name="farmID"
                    value={item.farmID}
                    onChange={changeHandler}
                    />
                    <input
                    type="text"
                    placeholder="Product ID"
                    name="productID"
                    value={item.productID}
                    onChange={changeHandler}
                    />
                    <input
                    type="text"
                    placeholder="Weight"
                    name="measurementType"
                    value={item.measurementType}
                    onChange={changeHandler}
                    />
                    <input
                    type="text"
                    placeholder="Quantity"
                    name="quantity"
                    value={item.quantity}
                    onChange={changeHandler}
                    />
                    <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={item.price}
                    onChange={changeHandler}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    />
                    <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddInventory;