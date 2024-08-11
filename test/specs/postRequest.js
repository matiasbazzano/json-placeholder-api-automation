import { expect } from 'chai';
import { apiHelper } from '../utils/apiHelper.js';
import data from '../data/data.json' assert { type: 'json' };

describe('API POST Requests', () => {

    it('POST comments path', async () => {

        const requestData = {
            postId: data.testDataTwo[0].postId,
            name: data.testDataTwo[0].name,
            email: data.testDataTwo[0].email,
            body: data.testDataTwo[0].body
        };

        const response = await apiHelper.post('/comments/', requestData);
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('postId', requestData.postId);
        expect(response.body).to.have.property('name', requestData.name);
        expect(response.body).to.have.property('email', requestData.email);
        expect(response.body).to.have.property('body', requestData.body);
    });

    it('POST invalid endpoint - Scenario 01', async () => {
        const response = await apiHelper.post('/comments/test');
        expect(response.status).to.equal(404);
        expect(response.body).to.be.empty;
    });

    it('POST invalid endpoint - Scenario 02', async () => {
        const response = await apiHelper.post('/');
        expect(response.status).to.equal(404);
        expect(response.body).to.be.empty;
    });

    it('POST empty request body', async () => {
        const response = await apiHelper.post('/comments/');
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
    });
});
