import supertest from 'supertest';
import { config } from '../config/config.js';

const { baseURL, headers } = config;

class ApiHelper {
    constructor() {
        this.client = supertest(baseURL);
    }

    async get(endpoint) {
        return this.client.get(endpoint).set(headers);
    }

    async post(endpoint, data) {
        return this.client.post(endpoint).set(headers).send(data);
    }

    async put(endpoint, data) {
        return this.client.put(endpoint).set(headers).send(data);
    }

    async delete(endpoint) {
        return this.client.delete(endpoint).set(headers);
    }
}

export const apiHelper = new ApiHelper();