import { expect } from 'chai';
import { apiHelper } from '../utils/apiHelper.js';
import data from '../data/data.json' assert { type: 'json' };
import { API_ENDPOINTS, RESPONSE_STATUS } from '../config/constants.js';

describe('API GET Requests', () => {

    it('GET comments path', async () => {
        const response = await apiHelper.get(API_ENDPOINTS.COMMENTS);
        expect(response.status).to.equal(RESPONSE_STATUS.SUCCESS);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.above(1);
        response.body.forEach(item => {
            expect(item).to.have.property('id');
            expect(item).to.have.property('name');
            expect(item).to.have.property('email');
            expect(item).to.have.property('body');
        });
    });

    it('GET with valid ID', async () => {
        const { id, postId, name, email, body } = data.testDataOne[0];
        const response = await apiHelper.get(`${API_ENDPOINTS.COMMENTS}/${id}`);
        expect(response.status).to.equal(RESPONSE_STATUS.SUCCESS);
        expect(response.body).to.have.property('postId', postId);
        expect(response.body).to.have.property('id', id);
        expect(response.body).to.have.property('name', name);
        expect(response.body).to.have.property('email', email);
        expect(response.body).to.have.property('body', body);
    });

    it('GET with invalid ID', async () => {
        const response = await apiHelper.get(API_ENDPOINTS.COMMENTS + '/test');
        expect(response.status).to.equal(RESPONSE_STATUS.NOT_FOUND);
        expect(response.body).to.be.empty;
    });
});
