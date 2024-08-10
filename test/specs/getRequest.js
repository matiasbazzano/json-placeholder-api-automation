import { expect } from 'chai';
import { apiHelper } from '../utils/apiHelper.js';
import data from '../data/data.json' assert { type: 'json' };

describe('API GET Requests', () => {

    it('GET comments path', async () => {
        const response = await apiHelper.get('/comments');
        expect(response.status).to.equal(200);
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
        const commentId = data.testDataOne[0].id;
        const expectedPostId = data.testDataOne[0].postId;
        const expectedEmail = data.testDataOne[0].email;
        const response = await apiHelper.get(`/comments/${commentId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('postId', expectedPostId);
        expect(response.body).to.have.property('email', expectedEmail);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('email');
        expect(response.body).to.have.property('body');
    });

    it('GET with invalid ID', async () => {
        const commentId = "A";
        const response = await apiHelper.get(`/comments/${commentId}`);
        expect(response.status).to.equal(404);
        expect(response.body).to.be.empty;
    });
});
