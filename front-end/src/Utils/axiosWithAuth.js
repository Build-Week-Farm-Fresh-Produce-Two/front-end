import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        // baseURL: add api here,
        headers: {
            Authorization: token
        }
    })
}