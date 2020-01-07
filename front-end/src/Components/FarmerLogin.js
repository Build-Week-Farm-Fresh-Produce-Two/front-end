import React from 'react'
import { axiosWithAuth } from '../Utils/axiosWithAuth';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            //username and password
        }
    }

handleChange = e => {
    //add this.setState({credentials: {...this.state.credentials, [e.target.name]: e.target.value})
    }


handleSubmit = e => {
    e.prevent.default();
    axiosWithAuth()
        .post()
        .then(res => {
            localStorage.setItem("token", res.data.payload);
        })
        .catch(err => console.log(err));
}
render() {
    return (
        <div>
            {/* add login form here */}
        </div>
    );
}

}