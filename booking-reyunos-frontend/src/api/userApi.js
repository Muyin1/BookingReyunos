import axios from 'axios';

const API_URL = 'http://localhost:8080'; // URL del backend Spring Boot

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/users/register`, userData);
};

export const loginUser = async (loginData) => {
    return await axios.post(`${API_URL}/users/login`, loginData);
};
