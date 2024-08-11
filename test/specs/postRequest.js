import { expect } from 'chai';
import { apiHelper } from '../utils/apiHelper.js';
import data from '../data/data.json' assert { type: 'json' };
import { API_ENDPOINTS, RESPONSE_STATUS } from '../config/constants.js';

describe('API POST Requests', () => {

    it('POST comments path', async () => {
        const { postId, name, email, body } = data.testDataTwo[0];
        const requestData = {
            postId,
            name,
            email,
            body
        };

        const response = await apiHelper.post(API_ENDPOINTS.COMMENTS, requestData);
        expect(response.status).to.equal(RESPONSE_STATUS.CREATED);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('postId', requestData.postId);
        expect(response.body).to.have.property('name', requestData.name);
        expect(response.body).to.have.property('email', requestData.email);
        expect(response.body).to.have.property('body', requestData.body);
    });

    it('POST invalid endpoint - Scenario 01', async () => {
        const response = await apiHelper.post('/');
        expect(response.status).to.equal(RESPONSE_STATUS.NOT_FOUND);
        expect(response.body).to.be.empty;
    });

    it('POST invalid endpoint - Scenario 02', async () => {
        const response = await apiHelper.post(API_ENDPOINTS.COMMENTS + '/test');
        expect(response.status).to.equal(RESPONSE_STATUS.NOT_FOUND);
        expect(response.body).to.be.empty;
    });

    it('POST empty request body', async () => {
        const response = await apiHelper.post(API_ENDPOINTS.COMMENTS);
        expect(response.status).to.equal(RESPONSE_STATUS.CREATED);
        expect(response.body).to.have.property('id');
    });
});
