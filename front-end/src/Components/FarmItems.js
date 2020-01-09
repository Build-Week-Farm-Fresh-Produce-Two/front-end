import React, { useState } from "react";
import {axiosWithAuth} from "../Utils/axiosWithAuth";



const initialSupply = {
    supplys: "",
};

const SupplyList = ({supply, updateSupply}) => {
    console.log(supply);
    const [editing, setEditing] = useState(false);
    const [supplyToEdit, setSupplyToEdit] = useState(initialSupply);

    const editSupply = supplys => {
    setEditing(true);
    setSupplyToEdit(supplys);
    };

    const refresh= () => {
    axiosWithAuth()
        .get("api/supply/")
        .then(response => {
            updateSupply(response.data)
            console.log(response.data.message);
        })
        .catch(error => {
        console.log('string to label what axios call went wrong, error: ', error.response.data.message)
        })
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`api/supply/${supplyToEdit.id}`, supplyToEdit)
        .then(response => {
            const newSupply = supply.map(item => {
            if (item.id === supplyToEdit.id) {
                return supplyToEdit;
            } else {
                return item;
            }
            })
            updateSupply(newSupply);
            setEditing(false);
            setSupplyToEdit({initialSupply});
            console.log(response.data)
        })
        .catch(error => {
            console.log('string to label what axios call went wrong, error: ', error.response.data.message)
        })
    };

    const deleteSupply = supplys=> {
        axiosWithAuth()
        .delete(`api/supply/${supplys.id}`)
        .then(response => {
            setSupplyToEdit(initialSupply);
            setEditing(false);
            refresh();
            console.log("supply in deleteSupply: ", response.data.message)
        })
        .catch(error => {
            console.log('string to label what axios call went wrong, error: ', error.response.data.message)
        })
    };

    return (
        <div>
            <p>Inventory</p>
            <ul>
            {supply && supply.map(supplys => (
                <li key={supplys.supply} onClick={() => editSupply(supply)}>
                    <span>
                        <span className="delete" onClick={e => {
                            e.stopPropagation();
                            deleteSupply(supply)
                            }
                        }>
                            x
                        </span>{" "}
                        {supply.supply}
                    </span>
                </li>
            ))}
            </ul>
            {editing && (
            <form onSubmit={saveEdit}>
                <legend>Edit Inventory</legend>
                <label>
                    Product name:
                <input
                    onChange={e =>
                    setSupplyToEdit({ ...supplyToEdit, supplys: e.target.value })
                    }
                    value={supplyToEdit.supply}
                />
                </label>
                <div className="button-row">
                    <button type="submit">Save</button>
                    <button onClick={() => setEditing(false)}>cancel</button>
                </div>
            </form> 
            )}
        </div>
    )
};



export default SupplyList;
