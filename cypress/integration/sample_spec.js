describe('Test CU\'s Homepage', () => {

  beforeEach(() => {
    // Given I am on the CU homepage.
    cy.visit('/');
  });

  it('Finds logo in header', () => {
    // When I inspect the header.
    cy.get('header').within((header) => {
      // Then I should see the logo.
      cy.get('#logo').should('be.visible');
    })
  })

  it('Can interact with search', () => {
      // When I open the search input.
      cy.get('.l-region--branding i.fa-search').click();

      // Then I should see search prompt text.
      cy.contains('Search CU.EDU');

      // And I should see search placeholder text.
      cy.get('input[name="search"]').should('have.attr', 'placeholder', 'Search Sites & People')

      // When I search for "donor".
      .type('donor{enter}');

      // The the URL should have the search paramter in it.
      cy.location('search').should('contains', 'search=donor');

  });
})