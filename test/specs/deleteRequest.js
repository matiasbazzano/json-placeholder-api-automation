import { apiHelper } from '../utils/apiHelper.js';
import functions from '../utils/functions.js';
import { API_ENDPOINTS } from '../config/constants.js';

describe('API DELETE Requests', () => {

    it('DELETE with valid ID', async () => {
        const response = await apiHelper.delete(`${API_ENDPOINTS.COMMENTS}/05`);
        functions.expectSuccessResponseStatusCode(response.status);
        functions.expectEmptyResponseBody(response.body);
    });

    it('DELETE with invalid ID', async () => {
        const response = await apiHelper.get(API_ENDPOINTS.COMMENTS + '/test');
        functions.expectNotFoundResponseStatusCode(response.status);
        functions.expectEmptyResponseBody(response.body);
    });
});