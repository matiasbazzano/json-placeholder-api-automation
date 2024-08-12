import { apiHelper } from '../utils/apiHelper.js';
import data from '../data/data.json' assert { type: 'json' };
import functions from '../utils/functions.js';
import { API_ENDPOINTS } from '../config/constants.js';

describe('API GET Requests', () => {

    it('GET comments path', async () => {
        const response = await apiHelper.get(API_ENDPOINTS.COMMENTS);
        functions.expectSuccessResponseStatusCode(response.status);
        functions.expectResponseBodyToBeAnArray(response.body);
        functions.expectAllPropertiesInArrayItems(response.body, 'id', 'name', 'email', 'body');
    });

    it('GET with valid ID', async () => {
        const expectedResponse = data.testDataOne[0];
        const response = await apiHelper.get(`${API_ENDPOINTS.COMMENTS}/${expectedResponse.id}`);
        functions.expectSuccessResponseStatusCode(response.status);
        functions.expectAllProperties(response.body, 'postId', 'id', 'name', 'email', 'body');
        functions.expectGETAllPropertiesWithData(response.body, expectedResponse);
    });

    it('GET with invalid ID', async () => {
        const response = await apiHelper.get(API_ENDPOINTS.COMMENTS + '/test');
        functions.expectNotFoundResponseStatusCode(response.status);
        functions.expectEmptyResponseBody(response.body);
    });
});
