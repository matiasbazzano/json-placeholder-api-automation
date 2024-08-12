import { apiHelper } from '../utils/apiHelper.js';
import data from '../data/data.json' assert { type: 'json' };
import functions from '../utils/functions.js';
import { API_ENDPOINTS } from '../config/constants.js';

describe('API POST Requests', () => {

    it('POST comments path', async () => {
        const expectedResponse = data.testDataTwo[0];
        const response = await apiHelper.post(API_ENDPOINTS.COMMENTS, expectedResponse);
        functions.expectCreatedResponseStatusCode(response.status);
        functions.expectAllProperties(response.body);
        functions.expectPOSTAllPropertiesWithData(response.body, expectedResponse);
    });

    it('POST invalid endpoint - Scenario 01', async () => {
        const response = await apiHelper.post('/');
        functions.expectNotFoundResponseStatusCode(response.status);
        functions.expectEmptyResponseBody(response.body);
    });

    it('POST invalid endpoint - Scenario 02', async () => {
        const response = await apiHelper.post(API_ENDPOINTS.COMMENTS + '/test');
        functions.expectNotFoundResponseStatusCode(response.status);
        functions.expectEmptyResponseBody(response.body);
    });

    it('POST empty request body', async () => {
        const response = await apiHelper.post(API_ENDPOINTS.COMMENTS);
        functions.expectCreatedResponseStatusCode(response.status);
        functions.expectIdPropertyInResponseBody(response.body);
    });
});
