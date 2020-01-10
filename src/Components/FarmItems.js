import React from "react";



const FarmItems = supply => {
    console.log(supply);

    return (
        <div>
            <p>Inventory</p>
            {/* <ul>
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
            )} */}
        </div>
    )
};



export default FarmItems;
