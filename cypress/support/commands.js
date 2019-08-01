const loginUI = require("./loginUI");

Cypress.Commands.add("enterPhoneAndVerificationCode", loginUI);
/* global Cypress, cy */
/* eslint no-undef: "error" */
Cypress.Commands.add(
    'callService',
    ({ serviceName, pathname = '/', method = 'GET', params = {}, data = {}, requestHeaders = {}, requestForm }) => {
        if (!pathname.startsWith('/')) {
            throw new Error('pathname must start with /');
        }

        const paramKeys = Object.keys(params);
        const paramValues = Object.values(params);

        const baseOneBoxUrl = Cypress.env('BASE_HOST').replace('www', serviceName);
        let requestUrl = '';

        if (serviceName == null) {
            requestUrl = `http://localhost:9001${pathname}`;
        } else {
            requestUrl = `${baseOneBoxUrl}${pathname}?${paramKeys}=${paramValues}`;
        }
        return cy.request({
            url: requestUrl,
            body: data,
            method: method.toUpperCase(),
            headers: requestHeaders,
            form: requestForm,
            timeout: 60000,
        });
    },
);
