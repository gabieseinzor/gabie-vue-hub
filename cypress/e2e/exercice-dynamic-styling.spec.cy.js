// describe("Test sur le Composant (Page) Dynamic Styling", () => {
//   it("Affiche le titre de la page", () => {
//     cy.visit("http://localhost:5173/exercice-dynamic-styling");
//     cy.get("h1").should("contain.text", "Dynamic Styling (Class)");
//   });
// });
// it("Affiche le nom sur les cartes", () => {
//   cy.visit("http://localhost:5173/exercice-dynamic-styling");

// });

describe("Dynamic Styling", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/exercice-dynamic-styling");
  });
  it("Affiche le titre de la page", () => {
    cy.get("h1").should("contain.text", "Dynamic Styling (Class)");
  });
  it("affiche les 4 cartes", () => {
    cy.contains("button", "Carte 1 via style").should("be.visible");
    cy.contains("button", "Carte 2 via style").should("be.visible");
    cy.contains("button", "Carte 3 via class").should("be.visible");
    cy.contains("button", "Carte 4 via class").should("be.visible");
  });

  it("affiche le texte de chaque carte, dans l'ordre", () => {
    cy.get(".grid button").should("have.length", 4);

    cy.get(".grid button").eq(0).should("contain.text", "Carte 1 via style");
    cy.get(".grid button").eq(1).should("contain.text", "Carte 2 via style");
    cy.get(".grid button").eq(2).should("contain.text", "Carte 3 via class");
    cy.get(".grid button").eq(3).should("contain.text", "Carte 4 via class");
  });
  it("carte 1 : bascule entre bleu et rose au clic", () => {
    cy.contains("button", "Carte 1 via style").as("card1");

    // Au départ : bleu
    cy.get("@card1").should("have.css", "background-color", "rgb(0, 0, 255)");

    // 1er clic : rose
    cy.get("@card1").click();
    cy.get("@card1").should(
      "have.css",
      "background-color",
      "rgb(255, 20, 147)",
    );

    // 2e clic : de nouveau bleu
    cy.get("@card1").click();
    cy.get("@card1").should("have.css", "background-color", "rgb(0, 0, 255)");
  });
  it("carte 2 : bascule entre rose et bleu au clic", () => {
    cy.contains("button", "Carte 2 via style").as("card2");

    // Au départ : rose
    cy.get("@card2").should(
      "have.css",
      "background-color",
      "rgb(255, 20, 147)",
    );

    // 1er clic : bleu
    cy.get("@card2").click();
    cy.get("@card2").should("have.css", "background-color", "rgb(0, 0, 255)");

    // 2e clic : de nouveau rose
    cy.get("@card2").click();
    cy.get("@card2").should(
      "have.css",
      "background-color",
      "rgb(255, 20, 147)",
    );
  });

  it("carte 3 : devient verte au clic, puis redevient blanche", () => {
    cy.contains("button", "Carte 3 via class").as("card3");

    cy.get("@card3").should("have.class", "bg-white");
    cy.get("@card3").click();
    cy.get("@card3").should("have.class", "bg-emerald-400");
    cy.get("@card3").should("not.have.class", "bg-white");
    cy.get("@card3").click();
    cy.get("@card3").should("have.class", "bg-white");
  });

  it("carte 4 : devient bleue au clic, puis redevient blanche", () => {
    cy.contains("button", "Carte 4 via class").as("card4");

    // Au départ : blanche
    cy.get("@card4").should("have.class", "bg-white");

    // 1er clic : bleue
    cy.get("@card4").click();
    cy.get("@card4").should("have.class", "bg-blue-400");
    cy.get("@card4").should("not.have.class", "bg-white");

    // 2e clic : de nouveau blanche
    cy.get("@card4").click();
    cy.get("@card4").should("have.class", "bg-white");
    cy.get("@card4").should("not.have.class", "bg-blue-400");
  });
});
