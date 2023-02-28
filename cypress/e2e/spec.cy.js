

describe("visits the home page and then navigates to the product page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get(':nth-child(2) > .Header_link__p__eK', { timeout: 10000 }).click()

    cy.url({ timeout: 10000 }).should(
      "be.equal",
      "http://localhost:3000/product"
    );
    // cy.get(".ListingContainer_card-container__ZcLXt", { timeout: 10000 });
    // cy.get(".ListingContainer_input-bar__ZDahT")
    //   .type("strawberries")
    //   .get(".ListingContainer_search-button__IcPHz")
    //   .click();
    // cy.get(".ListingContainer_card-container__ZcLXt > :nth-child(1)").contains(
    //   "Strawberries"
    // );
  });
});