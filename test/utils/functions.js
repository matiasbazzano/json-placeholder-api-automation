import { expect } from 'chai';
import { RESPONSE_STATUS } from '../config/constants.js';

const functions = {
    expectEmptyResponseBody(responseBodyString) {
        expect(responseBodyString).to.be.empty;
    },

    expectResponseBodyToBeAnArray(responseBodyString) {
        expect(responseBodyString).to.be.an('array');
    },

    expectSuccessResponseStatusCode(responseStatusCode) {
        expect(responseStatusCode).to.equal(RESPONSE_STATUS.SUCCESS);
    },

    expectNotFoundResponseStatusCode(responseStatusCode) {
        expect(responseStatusCode).to.equal(RESPONSE_STATUS.NOT_FOUND);
    },

    expectCreatedResponseStatusCode(responseStatusCode) {
        expect(responseStatusCode).to.equal(RESPONSE_STATUS.CREATED);
    },

    expectAllProperties(responseBodyString, ...properties) {
        properties.forEach(property => {
            expect(responseBodyString).to.have.property(property);
        });
    },

    expectGETAllPropertiesWithData(actualResponse, expectedResponse) {
        expect(actualResponse).to.have.property('postId', expectedResponse.postId);
        expect(actualResponse).to.have.property('id', expectedResponse.id);
        expect(actualResponse).to.have.property('name', expectedResponse.name);
        expect(actualResponse).to.have.property('email', expectedResponse.email);
        expect(actualResponse).to.have.property('body', expectedResponse.body);
    },

    expectPOSTAllPropertiesWithData(actualResponse, expectedResponse) {
        expect(actualResponse).to.have.property('postId', expectedResponse.postId);
        expect(actualResponse).to.have.property('name', expectedResponse.name);
        expect(actualResponse).to.have.property('email', expectedResponse.email);
        expect(actualResponse).to.have.property('body', expectedResponse.body);
    },

    expectAllPropertiesInArrayItems(array, ...properties) {
        array.forEach(item => {
            properties.forEach(property => {
                expect(item).to.have.property(property);
            });
        });
    },

    expectIdPropertyInResponseBody(responseBodyString) {
        expect(responseBodyString).to.have.property('id');
    }
}

export default functions;