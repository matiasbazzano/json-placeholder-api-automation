import { apiHelper } from '../utils/apiHelper.js';
import data from '../data/data.json' assert { type: 'json' };
import functions from '../utils/functions.js';
import { API_ENDPOINTS } from '../config/constants.js';

describe('API PUT Requests', () => {

    it('PUT comments path, using valid ID', async () => {
        const expectedResponse = data.testDataThree[0];
        const response = await apiHelper.put(`${API_ENDPOINTS.COMMENTS}/${expectedResponse.id}`, expectedResponse);
        functions.expectSuccessResponseStatusCode(response.status);
        functions.expectAllProperties(response.body);
        functions.expectGETAllPropertiesWithData(response.body, expectedResponse);
    });

    it('PUT invalid endpoint - Scenario 01', async () => {
        const response = await apiHelper.put('/');
        functions.expectNotFoundResponseStatusCode(response.status);
        functions.expectEmptyResponseBody(response.body);
    });

    it('PUT invalid endpoint - Scenario 02', async () => {
        const response = await apiHelper.put(API_ENDPOINTS.COMMENTS + '/test');
        functions.expectInternalServerErrorStatusCode(response.status);
    });

    it('PUT empty request body', async () => {
        const response = await apiHelper.put(API_ENDPOINTS.COMMENTS + '/5');
        functions.expectIdPropertyInResponseBody(response.body);
    });
});
