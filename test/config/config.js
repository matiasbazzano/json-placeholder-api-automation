import dotenv from 'dotenv';
dotenv.config();

export const config = {
    baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
};