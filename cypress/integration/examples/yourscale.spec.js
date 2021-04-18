/// <reference types="cypress" />

function fillField(label, text) {
  cy.contains("mat-form-field", label).find("input").type(text);
}
context("Products", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("http://localhost:4200/");

    cy.callFirestore("delete", `users/${Cypress.env("TEST_UID")}/produkty`);
    cy.callFirestore(
      "delete",
      `users/${Cypress.env("TEST_UID")}/produkty_zjedzone`
    );
  });

  it("add product", () => {
    cy.get(".fab-bottom-right").click();

    fillField("Nazwa", "dupa");
    fillField("Ilość", "10");
    fillField("Ilość", "10");
    fillField("Ilość", "10");
    fillField("Ilość", "10");

    // fillField("Nazwa", "dupa");
    // fillField("Nazwa", "dupa");
    // fillField("Nazwa", "dupa");
    // fillField("Nazwa", "dupa");
  });
  it("eat product", () => {
    //dodaj produkt do lodówki
    //kliknij w produkt
    //ustaw slider
    //kliknij zjedz
    //wejdz do tabeli kalorycznej
    //sprawdz po nazwie czy w tabeli czy dodano zjedzony produkt
  });
  it("delete product", () => {
    //dodaj produkt do lodówki
    //kliknij w produkt
    //kliknij przycisk wyrzuć z lodówki
    //sprawdz czy produkt został usunięty
  });
});
