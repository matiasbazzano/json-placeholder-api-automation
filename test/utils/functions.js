import { expect } from 'chai';
import { RESPONSE_STATUS } from '../config/constants.js';

const functions = {
    /**
     * Verify if the response body of the request is empty.
     */
    expectEmptyResponseBody(responseBodyString) {
        expect(responseBodyString).to.be.empty;
    },

    /**
     * Verify if the response is an array.
     */
    expectResponseBodyToBeAnArray(responseBodyString) {
        expect(responseBodyString).to.be.an('array');
    },

    /**
     * Verify if the response status code is equal to Success or 200.
     */
    expectSuccessResponseStatusCode(responseStatusCode) {
        expect(responseStatusCode).to.equal(RESPONSE_STATUS.SUCCESS);
    },

    /**
     * Verify if the response status code is equal to Not Found or 404.
     */
    expectNotFoundResponseStatusCode(responseStatusCode) {
        expect(responseStatusCode).to.equal(RESPONSE_STATUS.NOT_FOUND);
    },

        /**
     * Verify if the response status code is equal to Internal Server Error or 500.
     */
        expectInternalServerErrorStatusCode(responseStatusCode) {
            expect(responseStatusCode).to.equal(RESPONSE_STATUS.INTERNAL_SERVER_ERROR);
        },

    /**
     * Verify if the response status code is equal to Created or 201.
     */
    expectCreatedResponseStatusCode(responseStatusCode) {
        expect(responseStatusCode).to.equal(RESPONSE_STATUS.CREATED);
    },

    /**
     * Verify if the response body contains all specified properties.
     */
    expectAllProperties(responseBodyString, ...properties) {
        properties.forEach(property => {
            expect(responseBodyString).to.have.property(property);
        });
    },

    /**
     * Verify if the actual response matches the expected response for a GET request.
     */
    expectGETAllPropertiesWithData(actualResponse, expectedResponse) {
        expect(actualResponse).to.have.property('postId', expectedResponse.postId);
        expect(actualResponse).to.have.property('id', expectedResponse.id);
        expect(actualResponse).to.have.property('name', expectedResponse.name);
        expect(actualResponse).to.have.property('email', expectedResponse.email);
        expect(actualResponse).to.have.property('body', expectedResponse.body);
    },

    /**
     * Verify if the actual response matches the expected response for a POST request.
     */
    expectPOSTAllPropertiesWithData(actualResponse, expectedResponse) {
        expect(actualResponse).to.have.property('postId', expectedResponse.postId);
        expect(actualResponse).to.have.property('name', expectedResponse.name);
        expect(actualResponse).to.have.property('email', expectedResponse.email);
        expect(actualResponse).to.have.property('body', expectedResponse.body);
    },

    /**
     * Verify if all items in the array contain the specified properties.
     */
    expectAllPropertiesInArrayItems(array, ...properties) {
        array.forEach(item => {
            properties.forEach(property => {
                expect(item).to.have.property(property);
            });
        });
    },

    /**
     * Verify if the response body contains an 'id' property.
     */
    expectIdPropertyInResponseBody(responseBodyString) {
        expect(responseBodyString).to.have.property('id');
    }
}

export default functions;
