const möglichkeiten = ["Schere", "Stein", "Papier"];
const spielerAuswahlElement = document.getElementById("spielerAuswahl");
const computerAuswahlElement = document.getElementById("computerAuswahl");
const ergebnissElement = document.getElementById("ergebniss");
const spielerPunktestandAnzeige = document.getElementById(
  "spielerPunktestandAnzeige"
);
const computerPunktestandAnzeige = document.getElementById(
  "computerPunktestandAnzeige"
);
let spielerPunktestand = 0;
let computerPunktestand = 0;

function playGame(spielerWahl) {
  const computerAuswahl = möglichkeiten[Math.floor(Math.random() * 3)];
  let ergebniss = "";

  if (spielerWahl === computerAuswahl) {
    ergebniss = "UNENTSCHIEDEN";
  } else {
    switch (spielerWahl) {
      case "Schere":
        ergebniss =
          computerAuswahl === "Papier" ? "Gewonnen!" : "Leider verloren..";
        break;
      case "Stein":
        ergebniss =
          computerAuswahl === "Schere" ? "Gewonnen!" : "Leider verloren..";
        break;
      case "Papier":
        ergebniss =
          computerAuswahl === "Stein" ? "Gewonnen!" : "Leider verloren..";
        break;
    }
  }

  spielerAuswahlElement.textContent = `Spieler: ${spielerWahl}`;
  computerAuswahlElement.textContent = `Computer: ${computerAuswahl}`;
  ergebnissElement.textContent = ergebniss;

  ergebnissElement.classList.remove("greenText", "redText");

  switch (ergebniss) {
    case "Gewonnen!":
      ergebnissElement.classList.add("greenText");
      spielerPunktestand++;
      spielerPunktestandAnzeige.textContent = spielerPunktestand;
      break;
    case "Leider verloren..":
      ergebnissElement.classList.add("redText");
      computerPunktestand++;
      computerPunktestandAnzeige.textContent = computerPunktestand;
      break;
  }
}
