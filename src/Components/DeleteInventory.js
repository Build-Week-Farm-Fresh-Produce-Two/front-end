import React from 'react';
import {deleteSupply} from '../actions';
import {connect} from 'react-redux';



class DeleteInventory extends React.Component {
    // componentDidMount() {
    //     this.setState
    // }
    constructor(props) {
        super(props)
        this.state = {
        id: "",
        password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    

    handleChange(e) {
        e.preventDefault();
        this.setState({...this.state, [e.target.name]: e.target.value})
        console.log(this.state)
    }

    submitHandler(e) {
        e.preventDefault();
        this.props.deleteSupply(this.state.id, this.state.password)
    }
    
    render() { 
        return ( 
            <div>
                <h2>Delete Inventory Items</h2>
                <form onSubmit={this.submitHandler}>
                    <input 
                        type="text"
                        placeholder="Id"
                        name="id"
                        onChange={this.handleChange}
                        value={this.state.id}
                        />
                        <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        />
                    <button type="submit">Delete</button>
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
export default connect(mapStateToProps, {deleteSupply})(DeleteInventory);


