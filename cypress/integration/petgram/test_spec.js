/* global describe, it, cy */

describe("Primer test", function () {
  it("para ver si funciona", function () {
    cy.visit("/");
  });

  it("navegar en categorias", function () {
    cy.visit("/pet/1");
    cy.get("article");
  });
  it("navegar con la NavBar a la home", function () {
    cy.visit("/favs");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
  it("Los usuarios no registrados vean el formulario", function(){
    cy.visit('/favs')
    cy.get('form').should('have.lenght', 2)
  })
});
