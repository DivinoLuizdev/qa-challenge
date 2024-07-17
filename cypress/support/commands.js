// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// No arquivo cypress/support/commands.js

Cypress.Commands.add('visitAndClickButton', (url, buttonDataCy) => {
    cy.visit(url);
    cy.get(`[data-cy="${buttonDataCy}"]`).click();
  });
  

Cypress.Commands.add('isRequired', (targetMessage, target) => {
    cy.get(target)
        .invoke('prop', 'validationMessage')
        .should((text) => {
            expect(targetMessage).to.eq(text)
        })
})



 