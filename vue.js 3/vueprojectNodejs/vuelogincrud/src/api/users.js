import axios from 'axios';

const apiUrl = 'http://127.0.0.1:99';

export const memberJoin = (data) => {
    return axios.post(`${apiUrl}/memberJoin`, data);
};

export const memberList = (data) => {
    return axios.post(`${apiUrl}/login`, data);
};
