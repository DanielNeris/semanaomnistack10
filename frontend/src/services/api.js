import axios from 'axios';

const api = axios.create({
    baseURL: 'https://danielneris-desmap-backend.herokuapp.com'
});

export default api;
