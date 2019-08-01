const waitForStatusChangeCallService = require('./utils')
/**
 * Access back-end service directly during end-to-end test
 */
function createUser(        
    phone_number,
    is_enterprise_user = false,
    driver = false,
    enterprise_admin = false,
    bypass_login_challenges = true,){
        const data = {
            phone_number,
            is_enterprise_user,
            driver,
            enterprise_admin,
            bypass_login_challenges,
        };
        return cy.callService({
            serviceName: 'e2etest-server',
            pathname: '/v1/user',
            method: 'POST',
            data,
        }).then(() => {
            cy.wait(10000);
        })
}

/**
 * Poll and Wait for the user to be in ready / active state.
 * @phoneNumber
 */
function getUser(phoneNumber){
    return waitForStatusChangeCallService('e2etest-server', `/v1/user/${phoneNumber}`)
}

module.exports = { createUser, getUser }

