import React from 'react';
import axios from 'axios';

// * CUSTOM AXIOS INSTANCE
export const axiosWithAuth = () => {
    const port = process.env.PORT || 5000;
    const token = localStorage.getItem('token');

    return !!token === true && axios.create({
        baseURL: `http://localhost:${port}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
    });
};
