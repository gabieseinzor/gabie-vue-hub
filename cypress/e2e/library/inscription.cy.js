describe("Library - Inscription", () => {
  beforeEach(() => {
    cy.visit(`https://library.mithridatem.fr/register`);
  });
  it("Affiche le titre de la page", () => {
    cy.get("h1").should("contain.text", "Ajouter un compte");
  });
  it("Inscription OK avec des données valides", () => {
    cy.fixture("users").then((users) => {
      const user = users.validUser;

      cy.get("#firstname").type(user.firstName);
      cy.get("#lastname").type(user.lastName);
      cy.get("#email").type(user.email);
      cy.get("#password").type(user.password);
      cy.get("#confirm-password").type(user.confirmPassword);

      cy.contains("button", "Inscription").click();
    });
  });
});
