import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localost:3030',
});

export default api;