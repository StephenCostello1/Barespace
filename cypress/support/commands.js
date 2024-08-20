Cypress.Commands.add('getIframeDocument', (iframeSelector) => {
    return cy
      .get(iframeSelector, { timeout: 10000 }) // Ensure the iframe is found and loaded
      .its('0.contentDocument').should('exist'); // Get the contentDocument of the iframe
  });
  
  Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    return cy.getIframeDocument(iframeSelector)
      .its('body').should('not.be.undefined')
      .then(cy.wrap); // Wrap the body so you can chain Cypress commands
  });
  