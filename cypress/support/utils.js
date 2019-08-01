const MAX_RETRIES = 10;
const RETRY_DELAY = 2000;

module.exports = function waitForStatusChangeCallService(serviceName, pathname, tryCount = 0) {
    return cy.callService({
        serviceName,
        pathname,
        method: 'GET',
        failOnStatusCode: false
    }).then((response) => {
        cy.wrap(response.body, { log: true} )
        if (response.status === 200) {
            if (response.body === 'PENDING' || response.body.state === 'PENDING'){
                if (tryCount >= MAX_RETRIES) {
                    throw new Error('The status for the user did not change in time')
                }
                return Cypress.Promise.delay(RETRY_DELAY).then(()=> {
                    return waitForStatusChangeCallService(serviceName, pathname, tryCount)
                })
            }
        } else {
            waitForStatusChangeCallService(serviceName, pathname, tryCount)
        }
    })
}