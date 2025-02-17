import axios from 'axios';

// Load environment variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://hidebehider-backend.onrender.com';

export const login = async (email, password) => {
    return await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
};

export const register = async (email, password) => {
    return await axios.post(`${API_BASE_URL}/auth/register`, { email, password });
};
