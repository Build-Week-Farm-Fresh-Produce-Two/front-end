import React from 'react';
import { handleDelete, fetchSupplys } from '../actions';
import {connect} from 'react-redux';

class DeleteInventory extends React.Component {
    componentDidMount() {
        this.props.handleDelete();
    }
    
    render() { 
        return ( 
            <div>
                <h2>Delete Inventory Items</h2>
                <form onSubmit={handleDelete}>
                    <Select options={fetchSupplys} />
                <input 
                type="password"
                placeholder="Password"
                name="password"
                />
                <button>Delete</button>
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
export default connect(mapStateToProps, {handleDelete}(DeleteInventory));


